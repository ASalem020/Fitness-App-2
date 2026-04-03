import { PlusCircle, TextAlignStart } from "lucide-react";
import image from "../../../assets/images/image-ai.png";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import ChatHistory from "./sidebar-history";
import AIChatInput from "./ai-chat-input";
import ChatMessage from "./chat-message";
import useTalkToChatbot from "../hooks/use-talk-to-chatbot";
import type { ChatMessageType } from "../types/chat-message";
import type { PreviousChatType } from "../types/previous-chat";
import { PREVIOUS_CHATS_KEY } from "../constants/ai-chat.constant";

// Function to set initial state value
const readPreviousChats = (): [] => {
  const savedChatsString = localStorage.getItem(PREVIOUS_CHATS_KEY);

  if (!savedChatsString) return [];

  const parsedChats = JSON.parse(savedChatsString);
  return parsedChats;
};

export default function AIChat() {
  // Variables
  // Exception : set variables here to can use it in state
  const initialValue: ChatMessageType[] = [
    { role: "bot", message: "Hello How Can I Assist You Today ?" },
  ];

  // State
  const [open, setOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>(initialValue);
  const [previousChats, setPreviousChats] = useState<PreviousChatType[]>(() =>
    readPreviousChats(),
  );

  // Mutation
  const { mutateAsync, isLoading } = useTalkToChatbot();

  // Handlers
  /**
   * Handles the creation of a new chat session.
   *
   * This function performs multiple tasks to set up a new chat, including:
   *  1. Constructing new chat session data.
   *  2. Saving the new chat into localStorage if not present.
   *  3. Avoiding duplicate sessions by checking for existing titles.
   *  4. Saving the new chat to the history, ensuring no duplicates.
   *  5. Resetting the chat messages to the initial state for a fresh start.
   *
   * @returns {void}
   */
  const handleClickNewChat = () => {
    // --- 1. Construct the new chat data ---
    const savedChats = localStorage.getItem(PREVIOUS_CHATS_KEY);
    const chatData = {
      id: crypto.randomUUID(), // Generate a unique ID for the chat
      // Use message at index 1 as the title (assumes first message is always "bot" greeting)
      title: messages[1]?.message,
      messages: messages, // Store the current messages
    };

    // --- 2. If there is no previous chats history, save this new chat as the first item ---
    if (!savedChats) {
      localStorage.setItem(PREVIOUS_CHATS_KEY, JSON.stringify([chatData]));
      setPreviousChats([chatData]);
    }

    // --- 3. Parse the saved chats to check for duplicates by title ---
    const parsedSaved: PreviousChatType[] = savedChats
      ? JSON.parse(savedChats)
      : [];
    const isSavedBefore = Boolean(
      parsedSaved.find((chat) => chat.title === chatData.title),
    );

    let chatsReadyToSave;

    // --- 4a. If this chat is NOT saved before, append and update localStorage/history state ---
    if (!isSavedBefore) {
      chatsReadyToSave = [...JSON.parse(savedChats || "[]"), chatData];
      localStorage.setItem(
        PREVIOUS_CHATS_KEY,
        JSON.stringify(chatsReadyToSave),
      );
      setPreviousChats(chatsReadyToSave);
    }

    // --- 4b. Prepare to overwrite any previous chat with the same title (ensuring the most recent replaces) ---
    // Remove any existing chat with this title from the displayed history, then add the new one.
    const filteredData = previousChats.filter(
      (chat) => chat.title !== chatData.title,
    );
    chatsReadyToSave = [...filteredData, chatData];
    localStorage.setItem(PREVIOUS_CHATS_KEY, JSON.stringify(chatsReadyToSave));
    setPreviousChats(chatsReadyToSave);

    // --- 5. Reset the chat UI/messages for a new session ---
    setMessages(initialValue);
  };

  return (
    <>
      {!open && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
          {/* image */}
          <img
            src={image}
            alt="image chat ai"
            className="w-24 h-24 object-contain mb-[-12px] z-10"
          />

          {/* button */}
          <Button
            onClick={() => setOpen(true)}
            className="
              bg-orange-500 text-white px-5 py-3 rounded-full
              shadow-[0_0_25px_rgba(255,115,0,0.7)]
              hover:scale-105 transition
            "
          >
            Hey Ask Me
          </Button>
        </div>
      )}

      {/* chat */}
      {open && (
        <>
          <div className="fixed top-24 right-32 z-30">
            <img
              src={image}
              alt="image chat ai"
              className="w-24 h-24 object-contain -mb-3"
            />
            <Button
              onClick={() => setOpen(false)}
              className="
                bg-orange-600 text-white px-5 py-3 rounded-full
                shadow-[0_0_25px_rgba(255,115,0,0.7)]
                hover:scale-105 transition
              "
            >
              Tap to Close
            </Button>
          </div>

          <div className="fixed bottom-6 right-6 w-96 h-[420px] z-30">
            {/* overlay  */}
            <div
              className="
              absolute inset-0 
              bg-[#1A1A1A]/50 
              backdrop-blur-xl 
              rounded-2xl 
              border border-orange-500/60
              shadow-[0_0_30px_rgba(255,115,0,0.4)]
"
            />
            {/* content */}
            <div className="relative z-10 flex flex-col h-full text-white">
              {/* Header */}
              <div className="flex justify-between items-center p-3">
                {/* Title */}
                <h3 className="font-semibold">Smart Coach</h3>

                {/* Previous Chats Button */}
                <Button
                  onClick={() => setHistoryOpen(true)}
                  className="text-orange-500 text-xl bg-transparent border-none hover:bg-transparent"
                >
                  <TextAlignStart className="cursor-pointer" size={18} />
                </Button>
              </div>

              {/* Messages */}
              <div className="scroll-container flex-1 p-3 space-y-3 overflow-y-auto text-sm">
                {/* AI */}
                {messages.map((message, i) => (
                  <ChatMessage
                    key={i}
                    role={message.role}
                    message={message.message}
                  />
                ))}
                {isLoading && (
                  <ChatMessage
                    role="bot"
                    message="Thinking ..."
                    className="animate-pulse"
                  />
                )}
              </div>

              {/* Input */}
              <AIChatInput
                isLoading={isLoading}
                setMessage={setMessages}
                talkToChatbot={mutateAsync}
              />

              {/* New Chat Button */}
              <div className="new-chat-button-container container mx-auto px-3">
                <Button
                  onClick={handleClickNewChat}
                  // Message equal one only in initial value || current messages equal
                  disabled={
                    messages.length === 1 ||
                    Boolean(
                      previousChats.find((chat) => chat.messages === messages),
                    )
                  }
                  className="mb-3 w-full bg-gradient-to-r from-[#FF4A11] via-[#FF7342] to-[#1A1A1A] text-white font-bold px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-150"
                >
                  <span className="flex items-center gap-2">
                    <PlusCircle
                      className="text-white bg-white/15 rounded-full"
                      size={20}
                    />
                    New Chat
                  </span>
                </Button>
              </div>
            </div>

            {/* menu */}
            {historyOpen && (
              <ChatHistory
                setChat={setMessages}
                previousChats={previousChats}
                onClose={() => setHistoryOpen(false)}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

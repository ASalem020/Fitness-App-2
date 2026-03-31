import type { RegisterFormValues } from "@/lib/types/register";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { useState, useReducer } from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { Button } from "@/components/ui/button";
import GenderStep from "./gender-step";
import AgeStep from "./age-step";
import WeightStep from "./weight-step";
import HeightStep from "./height-step";
import type { KYCState, KYCAction } from "../../../lib/type";
import GoalStep from "./goal-step";
import ActivityLevelStep from "./level-step";
import { registerAction } from "../../../actions/register.action";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface props {
  registerValues: RegisterFormValues;
  setKycSteps: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

// Initial state and reducer for KYC steps
const initialState: KYCState = {
  gender: "",
  age: 25,
  weight: 90,
  height: 160,
  goal: "",
  activityLevel: "",
};

// Reducer function to manage KYC state updates
const kycReducer = (state: KYCState, action: KYCAction): KYCState => {
  switch (action.type) {
    case "SET_GENDER":
      return { ...state, gender: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SET_WEIGHT":
      return { ...state, weight: action.payload };
    case "SET_HEIGHT":
      return { ...state, height: action.payload };
    case "SET_GOAL":
      return { ...state, goal: action.payload };
    case "SET_LEVEL":
      return { ...state, activityLevel: action.payload };
    default:
      return state;
  }
};

export default function KYC({ registerValues, setKycSteps, setError }: props) {
  // Navigation
  const navigate = useNavigate();

  // States to track the current step and KYC data
  const [currentStep, setCurrentStep] = useState(1);
  const [kycState, dispatch] = useReducer(kycReducer, initialState);

  // Disable button only for gender, goal, and activity level steps
  const isButtonDisabled =
    (currentStep === 1 && !kycState.gender) ||
    (currentStep === 5 && !kycState.goal) ||
    (currentStep === 6 && !kycState.activityLevel);

  // Handlers
  const handleFinish = async () => {
    try {
      await registerAction({ ...registerValues, ...kycState });
      toast.success("Account created successfully! Please log in.");
      navigate("/login");
    } catch (error) {
      setError((error as Error).message);
      setKycSteps(false);
    }
  };

  const handleNext = () => {
    // Only proceed if gender is selected on Step 1
    // if (currentStep === 1 && !kycState.gender) return;

    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleFinish();
    }
  };

  return (
    <div className="font-baloo-thambi flex flex-col items-center">
      {/* Steps Progress Circle container */}
      <div className="mb-2">
        <ProgressCircle
          value={(currentStep / 6) * 100}
          size={64}
          strokeWidth={2}
          progressClassName="text-orange-600"
        >
          <span className="text-xl font-medium text-white">
            {currentStep}/6
          </span>
        </ProgressCircle>
      </div>

      {/* Gender step */}
      {currentStep === 1 && (
        <GenderStep
          selectedGender={kycState.gender}
          onGenderChange={(gender) =>
            dispatch({ type: "SET_GENDER", payload: gender })
          }
        />
      )}

      {/* Age step */}
      {currentStep === 2 && (
        <AgeStep
          setAge={(age) => dispatch({ type: "SET_AGE", payload: age })}
        />
      )}

      {/* Weight step */}
      {currentStep === 3 && (
        <WeightStep
          setWeight={(weight) =>
            dispatch({ type: "SET_WEIGHT", payload: weight })
          }
        />
      )}

      {/* Height step */}
      {currentStep === 4 && (
        <HeightStep
          setHeight={(height) =>
            dispatch({ type: "SET_HEIGHT", payload: height })
          }
        />
      )}

      {/* Goal step */}
      {currentStep === 5 && (
        <GoalStep
          setGoal={(goal) => dispatch({ type: "SET_GOAL", payload: goal })}
        />
      )}

      {/* Activity level step */}
      {currentStep === 6 && (
        <ActivityLevelStep
          setLevel={(level) => dispatch({ type: "SET_LEVEL", payload: level })}
        />
      )}

      {/* Next button */}
      <Button
        onClick={handleNext}
        disabled={isButtonDisabled}
        className={cn(
          "h-10 w-full max-w-80 rounded-full text-white px-4 py-2 font-black transition-all duration-300",
          isButtonDisabled
            ? "bg-[#D3D3D3]"
            : "bg-orange-600 hover:bg-orange-500",
        )}
      >
        {currentStep === 6 ? "Finish" : "Next"}
      </Button>
    </div>
  );
}

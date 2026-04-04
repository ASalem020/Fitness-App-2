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
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegister } from "@/pages/register/hooks/use-register";
import { useTranslations } from "use-intl";

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

export default function KycSteps({
  registerValues,
  setKycSteps,
  setError,
}: props) {
  // Translations
  const t = useTranslations("kyc");

  // Navigation
  const navigate = useNavigate();

  // States
  const [currentStep, setCurrentStep] = useState(1);
  const [kycState, dispatch] = useReducer(kycReducer, initialState);

  // Hooks
  const { isLoading, register } = useRegister();

  // Disable button only for gender, goal, and activity level steps
  const isButtonDisabled =
    (currentStep === 1 && !kycState.gender) ||
    (currentStep === 5 && !kycState.goal) ||
    (currentStep === 6 && !kycState.activityLevel);

  // Total number of steps for progress calculation
  const stepsNumber = 6;

  const handleFinish = async () => {
    // Combine register form values with KYC data and send to backend
    register(
      { ...registerValues, ...kycState },
      {
        onSuccess: () => {
          toast.success("Registration successful!");
          navigate("/login");
        },
        onError: (error) => {
          setError((error as Error).message);

          // Go back to KYC steps to allow retry
          setKycSteps(false);
        },
      },
    );
  };

  const handleNext = () => {
    // proceed to next step
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // proceed to finish on last step and handle registration
      handleFinish();
    }
  };

  return (
    <div className="font-baloo-thambi flex flex-col items-center">
      {/* Steps Progress Circle container */}
      <div className="mb-2">
        <ProgressCircle
          value={(currentStep / stepsNumber) * 100}
          size={64}
          strokeWidth={2}
          progressClassName="text-orange-600"
        >
          <span className="text-xl font-medium text-white">
            {currentStep}/{stepsNumber}
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
        variant={"default"}
        onClick={handleNext}
        disabled={isButtonDisabled}
        isLoading={isLoading}
        className={cn(
          "w-full max-w-80 rounded-full transition-all duration-300",
        )}
      >
        {currentStep === 6 ? t("finishButton") : t("nextButton")}
      </Button>
    </div>
  );
}

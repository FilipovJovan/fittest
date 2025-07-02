import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    lastName: {
      type: String,
      default: "lastName",
    },
    date: {
      type: Date,
      min: "1900-01-01",
      max: new Date(),
    },
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: String,
    avatarPublicId: String,
    tier: Number,
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    isVerified: { type: Boolean, default: false },
    emailVerificationToken: String,
    emailVerificationTokenExpiry: Date,
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    areWeightsPutted: {
      type: Boolean,
      default: false,
    },
    userValues: {
      muscleInjuries: {
        type: [String],
        enum: [
          "chest",
          "back",
          "triceps",
          "biceps",
          "traps",
          "shoulders",
          "abs",
          "quadriceps",
          "hamstrings",
          "calves",
          "forearm",
          "none",
        ],
        default: "none",
        required: true,
      },
      jointInjuries: {
        type: [String],
        enum: ["elbow", "wrist", "knee", "ankle", "lower back", "none"],
        default: "none",
        required: true,
      },
      split: {
        type: String,
        enum: [],
        default: "none",
        required: true,
      },
      utcOffset: {
        type: String,
        default: "+00:00",
        validate: {
          validator: function (v) {
            return /^(\+|-)\d{2}:\d{2}$/.test(v);
          },
          message: (props) => `${props.value} is not a valid UTC offset!`,
        },
      },
      height: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
        required: true,
      },
      goal: {
        type: String,
        default: "none",
        required: true,
      },
      difficultyLevel: {
        type: String,
        required: true,
      },
      restDays: {
        type: [Number],
        required: true,
      },
      equipment: {
        type: [String],
        required: true,
      },
      workoutType: {
        type: String,
        required: true,
      },
    },

    activityLevel: {
      type: String,
      enum: [
        "Sedentary",
        "Lightly active",
        "Moderately active",
        "Very active",
        "Extra active",
      ],
    },
    workoutLevel: {
      type: Number,
      required: true,
    },
    fitnessGoal: {
      type: String,
      enum: ["Weight loss", "Maintenance", "Muscle Gain"],
      required: true,
    },
    currentCalories: {
      type: Number,
    },
    macros: {
      protein: Number,
      fat: Number,
      carbs: Number,
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", UserSchema);

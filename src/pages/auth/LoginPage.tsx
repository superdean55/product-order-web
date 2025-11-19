import { useForm, type SubmitHandler } from "react-hook-form";
import AuthCard from "../../components/ui/AuthCard";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

type LoginData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    mode: "onSubmit",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      await new Promise((r) => setTimeout(r, 800));
      
      // for testing purposes only
      const isInvalid =
        data.email !== "demo@example.com" || data.password !== "password";
      if (isInvalid) {
        setError("root", {
          type: "server",
          message: "Invalid email or password",
        });
        return;
      }
      console.log("Login successful:", data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("root", {
        type: "server",
        message: "Internal server error",
      });
    }
  };

  return (
    <AuthCard>
      <h1 className="text-2xl text-gray-600 font-bold mb-4 text-center">Login</h1>

      {errors.root && (
        <p className="text-red-500 text-sm mb-4 text-center">
          {errors.root.message}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
      </form>

      <p className="pt-4 text-sm text-gray-600 text-center">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">
          Register
        </a>
      </p>
    </AuthCard>
  );
}

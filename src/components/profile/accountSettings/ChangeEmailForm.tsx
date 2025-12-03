import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../ui/Input";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { ButtonColor } from "../../../constants/buttonColors";
import { useChangeEmailMutation } from "../../../hooks/queries/useAuthQuery";

interface ChangeEmailFormProps {
  email: string;
  onSuccess: () => void;
}
export const ChangeEmailForm = ({ onSuccess, email }: ChangeEmailFormProps) => {
  const { t } = useTranslation();
  const { mutateAsync: changeEmail, isPending } = useChangeEmailMutation();
  const RegisterSchema = z.object({
    email: z
      .string()
      .email(t("profile.actions.settings.changeEmail.errors.invalidEmail"))
      .nonempty(t("profile.actions.settings.changeEmail.errors.requiredEmail")),
  });

  type ChangeEmailData = z.infer<typeof RegisterSchema>;

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ChangeEmailData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: ChangeEmailData) => {
    try {
      const res = await changeEmail({
        email: data.email,
      });
      if (!res.success) {
        setError("root", { type: "server", message: res.message });
        return;
      }
      toast.success(res.message);
      onSuccess();
      reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message = err.response?.data?.message || t("register.serverError");
      toast.error(message);
      setError("root", { type: "server", message });
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col items-start ">
            <p
              className="text-[10px] font-medium uppercase tracking-wider
            text-gray-500 dark:text-gray-400"
            >
              {t("profile.actions.settings.changeEmail.currentEmail")}
            </p>
            <p className="text-gray-700 dark:text-gray-100">{email}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={t("profile.actions.settings.changeEmail.emailLabel")}
            type="email"
            placeholder={t(
              "profile.actions.settings.changeEmail.emailPlaceholder"
            )}
            {...register("email")}
            error={errors.email?.message}
          />

          {errors.root && (
            <p className="text-red-500 dark:text-red-800 text-sm mb-4 text-center">
              {errors.root.message}
            </p>
          )}
          <Button
            buttonColor={ButtonColor.primary}
            type="submit"
            disabled={isSubmitting || isPending}
          >
            {isSubmitting || isPending
              ? t("profile.actions.settings.changeEmail.submiting")
              : t("profile.actions.settings.changeEmail.submit")}
          </Button>
        </form>
      </div>
    </>
  );
};

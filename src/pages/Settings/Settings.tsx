import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import "./Settings.scss";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";

const schema = yup.object().shape({
  displayName: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  receiveUpdates: yup.boolean(),
});

interface FormInputs {
  displayName: string;
  email: string;
  address: string;
  receiveUpdates?: boolean;
}

const Settings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          {...register("displayName")}
          placeholder="Display Name"
        />
        <p>{errors.displayName?.message}</p>

        <Input type="email" {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>

        <Input type="text" {...register("address")} placeholder="Address" />
        <p>{errors.address?.message}</p>

        <Link to="/reset-password">Reset Password</Link>

        <label>
          <Input {...register("receiveUpdates")} type="checkbox" />
          Receive updates about new features
        </label>

        <Button
          type="submit"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Settings;

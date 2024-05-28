import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

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
    <div style={{ padding: "0 2rem" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          fontSize: "2em",
          margin: "20px 0",
        }}
      >
        Settings
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "300px",
          margin: "0 auto",
        }}
      >
        <input
          {...register("displayName")}
          placeholder="Display Name"
          style={{ padding: "0.5rem", fontSize: "1rem", borderRadius: "10px" }}
        />
        <p>{errors.displayName?.message}</p>

        <input
          {...register("email")}
          placeholder="Email"
          style={{ padding: "0.5rem", fontSize: "1rem", borderRadius: "10px" }}
        />
        <p>{errors.email?.message}</p>

        <input
          {...register("address")}
          placeholder="Address"
          style={{ padding: "0.5rem", fontSize: "1rem", borderRadius: "10px" }}
        />
        <p>{errors.address?.message}</p>

        <Link to="/reset-password">Reset Password</Link>

        <label>
          <input {...register("receiveUpdates")} type="checkbox" />
          Receive updates about new features
        </label>

        <input
          type="submit"
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        />
        <input
          type="reset"
          value="Cancel"
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "10px",
          }}
        />
      </form>
    </div>
  );
};

export default Settings;

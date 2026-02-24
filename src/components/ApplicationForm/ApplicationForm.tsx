import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { createApplication } from "../../features/applications/applicationSlice";

export default function ApplicationForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, success } = useSelector((state: RootState) => state.applications);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createApplication(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="application-form">
      <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required />

      <input type="file" onChange={handleFileChange} />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Submit"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Application sent successfully!</p>}
    </form>
  );
}

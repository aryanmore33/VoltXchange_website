import { useState } from "react";

export default function OnboardingForm() {
  const [form, setForm] = useState({ 
    companyName: "",
    businessAddress: "",
    businessType: "",
    businessLicense: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
     <div className="flex items-center justify-center border-2pxsolid black">
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-2">Onboarding & KYC Verification</h1>
      <p className="text-gray-600 mb-6 text-center">
        Please complete the steps below to verify your account and begin trading energy.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl"
      >
        <h2 className="text-lg font-semibold mb-4">
          1. Company Information & Business Verification
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Please provide your company details and upload a valid business license.
        </p>

       
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <div
            contentEditable
            onInput={(e) => handleChange("companyName", e.currentTarget.textContent)}
            className="w-full border rounded-lg p-2 min-h-[40px]"
          ></div>
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Address
          </label>
          <textarea
            rows="2"
            className="w-full border rounded-lg p-2"
            placeholder="123 Renewable Drive, Green City, GC 98765"
            onChange={(e) => handleChange("businessAddress", e.target.value)}
          ></textarea>
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Type
          </label>
          <select
            className="w-full border rounded-lg p-2"
            onChange={(e) => handleChange("businessType", e.target.value)}
          >
            <option value="">Select</option>
            <option value="LLC">LLC</option>
            <option value="Corporation">Corporation</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
          </select>
        </div>

       
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business License
          </label>
          <div
            onClick={() => handleChange("businessLicense", "dummy-file.pdf")}
            className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer text-gray-600"
          >
            Drag and drop files here or click to brower
          </div>
          {form.businessLicense && (
            <p className="text-sm mt-2 text-green-600">
              File selected: {form.businessLicense}
            </p>
          )}
        </div>

      
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Next Step →
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

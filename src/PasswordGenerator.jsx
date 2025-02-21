import React, { useState } from "react";
import ReactSwitch from "react-switch";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += "0123456789";
    if (includeSpecialChars) characters += "!@#$%^&*()_+";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters[Math.floor(Math.random() * characters.length)];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="text-white font-bold pt-8">
      <div className="flex flex-col items-center">
        <div className="bg-purple-800 w-[350px] shadow-2xl p-4 rounded-lg">
          <h2 className="text-center text-xl mb-4">Generate a Strong Password</h2>

          {/* Password Display */}
          <div className="bg-purple-700 p-2 rounded-md mb-4 flex justify-between items-center">
            <span className="truncate w-[80%]">{password || "Your password here"}</span>
            <button 
              onClick={copyToClipboard} 
              className="bg-blue-500 px-3 py-1 rounded-md text-sm">
              Copy
            </button>
          </div>

          {/* Password Length */}
          <div className="mb-4 flex items-center justify-between">
            <label>Password Length:</label>
            <input 
              className="w-12 bg-purple-700 pl-2 text-center" 
              type="number" 
              min="6"
              max="30"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Toggle Options */}
          <div className="mb-4 space-y-2">
            <div className="flex items-center justify-between">
              <label>Include Uppercase:</label>
              <ReactSwitch checked={includeUppercase} onChange={setIncludeUppercase} />
            </div>
            <div className="flex items-center justify-between">
              <label>Include Numbers:</label>
              <ReactSwitch checked={includeNumbers} onChange={setIncludeNumbers} />
            </div>
            <div className="flex items-center justify-between">
              <label>Include Special Characters:</label>
              <ReactSwitch checked={includeSpecialChars} onChange={setIncludeSpecialChars} />
            </div>
          </div>

          {/* Generate Button */}
          <button 
            onClick={generatePassword} 
            className="bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-lg w-full">
            Generate Password           
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendeeDetails.css";

export default function AttendeeDetails({ onBack, onNext }) {
  const [fullName, setFullName] = useState(localStorage.getItem('fullName') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [avatar, setAvatar] = useState(localStorage.getItem('avatar') || '');
  const [specialRequest, setSpecialRequest] = useState(localStorage.getItem('specialRequest') || '');
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('avatar', avatar);
    localStorage.setItem('specialRequest', specialRequest);
  }, [fullName, email, avatar, specialRequest]);

  const validate = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = "Full Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid.";
    if (!avatar) newErrors.avatar = "Avatar URL is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onNext({ fullName, email, avatar, specialRequest });
    }
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // Replace with your Cloudinary upload preset

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        );
        const imageUrl = response.data.secure_url;
        setAvatar(imageUrl);
        localStorage.setItem('avatar', imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-container w-[1440px] h-[1329px] bg-[#02191d] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[1200px] h-[76px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] justify-between items-center flex-nowrap bg-[rgba(5,37,44,0.4)] rounded-[24px] border-solid border border-[#197686] absolute top-[24px] left-1/2 translate-x-[-50%] translate-y-0 overflow-hidden z-[37]">
        <input className="w-[1200px] h-[76px] shrink-0 bg-transparent border-none absolute top-[-1px] left-[-1px] z-[54]" />
        <div className="flex w-[91.793px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[38]">
          <div className="flex w-[40px] pt-[6px] pr-[8px] pb-[6px] pl-[8px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#042e34] rounded-[12px] border-solid border border-[#0e464e] relative z-[39]">
            <div className="w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/77eb4865-908c-46c5-87f8-454643de4cc9.png)] bg-cover bg-no-repeat relative overflow-hidden z-40" />
          </div>
          <div className="w-[46.09px] h-[25.154px] shrink-0 bg-[url(../assets/images/080f8682-53dc-4d84-93b9-82a579bd627d.png)] bg-cover bg-no-repeat relative z-[41]" />
        </div>
        <div className="flex w-[341px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[42]">
          <div className="flex w-[74px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap relative z-[43]">
            <span className="h-[14px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[18px] font-normal leading-[14px] text-[#fff] relative text-left whitespace-nowrap z-[44]">
              Events
            </span>
          </div>
          <div className="flex w-[108px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap relative z-[45]">
            <span className="h-[14px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[18px] font-normal leading-[14px] text-[#b3b3b3] relative text-left whitespace-nowrap z-[46]">
              My Tickets
            </span>
          </div>
          <div className="flex w-[127px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap relative z-[47]">
            <span className="h-[14px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[18px] font-normal leading-[14px] text-[#b3b3b3] relative text-left whitespace-nowrap z-[48]">
              About Project
            </span>
          </div>
        </div>
        <button className="flex w-[169px] gap-[16px] items-center shrink-0 flex-nowrap border-none relative z-[49] pointer">
          <div className="flex w-[169px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[rgba(213,234,0,0.1)] relative z-50">
            <span className="h-[20px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[16px] font-normal leading-[20px] text-[#0a0c11] relative text-left uppercase whitespace-nowrap z-[51]">
              My Tickets
            </span>
            <div className="flex w-[16px] justify-center items-center shrink-0 flex-nowrap rounded-[594px] relative z-[52]">
              <div className="w-[17px] h-[7.364px] shrink-0 bg-[url(../assets/images/ed7231f3-b862-4828-bec1-3eb7f453cfc9.png)] bg-cover bg-no-repeat relative z-[53]" />
            </div>
          </div>
        </button>
      </div>
      <div className="flex w-[1440px] h-[1307px] pt-[112px] pr-0 pb-[112px] pl-0 flex-col gap-[80px] items-center flex-nowrap bg-[rgba(2,25,29,0.2)] absolute top-[34px] left-1/2 translate-x-[-50%] translate-y-0 overflow-hidden">
        <div className="flex flex-col gap-[48px] items-center self-stretch shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[700px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col gap-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#041e22] rounded-[24px] border-solid border border-[#0e464f] relative box-content z-[2]">
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[3]">
              <div className="flex gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[4]">
                <div className="flex flex-col gap-[16px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[5]">
                  <span className="h-[32px] self-stretch shrink-0 basis-auto font-['JejuMyeongjo'] text-[32px] font-normal leading-[32px] text-[#fff] relative text-left whitespace-nowrap z-[6]">
                    Attendee Details
                  </span>
                </div>
                <span className="h-[24px] shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[7]">
                  Step 2/3
                </span>
              </div>
              <div className="h-[4px] self-stretch shrink-0 bg-[#0e464e] rounded-[5px] relative overflow-hidden z-[8]">
                <div className="w-[326px] h-[4px] bg-[#23a0b5] rounded-[5px] relative overflow-hidden z-[9] mt-0 mr-0 mb-0 ml-0" />
              </div>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[32px] justify-center items-start self-stretch shrink-0 flex-nowrap bg-[#08252b] rounded-[32px] border-solid border border-[#0e464e] relative z-10">
              <div className="flex w-[556px] pt-[24px] pr-[24px] pb-[48px] pl-[24px] flex-col gap-[32px] items-start shrink-0 flex-nowrap bg-[#042127] rounded-[24px] border-solid border border-[#07363e] relative z-[11]">
                <span className="flex w-[147px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-center whitespace-nowrap z-[12]">
                  Upload Profile Photo
                </span>
                <div
                  className="flex h-[200px] gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[rgba(0,0,0,0.2)] relative z-[13]"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <div className="flex w-[240px] h-[240px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] justify-center items-center shrink-0 flex-nowrap bg-[#0e464e] rounded-[32px] border-solid border-4 border-[rgba(35,160,181,0.5)] relative z-[14]">
                    {uploading ? (
                      <span className="text-white">Uploading...</span>
                    ) : (
                      <>
                        <div className="w-[32px] h-[32px] shrink-0 bg-[url(../assets/images/1cb34ee4-46cb-4b37-b360-4fe9d7906a0a.png)] bg-cover bg-no-repeat relative overflow-hidden z-[15]" />
                        <span className="flex w-[192px] h-[48px] justify-center items-start self-stretch shrink-0 font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-center z-[16]">
                          Drag & drop or click to upload
                        </span>
                        <input
                          type="text"
                          value={avatar}
                          onChange={(e) => setAvatar(e.target.value)}
                          placeholder="Enter image URL"
                          className="w-full mt-2 p-2 rounded bg-[#042127] text-white"
                        />
                        {errors.avatar && <span className="text-red-500">{errors.avatar}</span>}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="h-[4px] self-stretch shrink-0 bg-[#07363e] relative overflow-hidden z-[17]" />
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[18]">
                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[19]">
                  Enter your name
                </span>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="flex h-[48px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#07363e] relative box-content z-20 text-white"
                />
                {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
              </div>
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[21]">
                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[22]">
                  Enter your email *
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-[48px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#07363e] relative box-content z-23 text-white"
                />
                {errors.email && <span className="text-red-500">{errors.email}</span>}
              </div>
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[27]">
                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[28]">
                  Special request?
                </span>
                <textarea
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="flex h-[127px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[8px] items-start self-stretch shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#07363e] relative box-content z-29 text-white"
                />
              </div>
              <div className="flex h-[48px] gap-[24px] justify-end items-end self-stretch shrink-0 flex-nowrap relative z-[31]">
                <div className="flex gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[32]">
                  <button onClick={onBack} className="flex pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap rounded-[8px] border-solid border border-[#23a0b5] relative box-content overflow-hidden z-[33] hover:bg-[#12464e] cursor-pointer">
                    <span className="h-[24px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[16px] font-normal leading-[24px] text-[#23a0b5] relative text-left whitespace-nowrap z-[34]">
                      Back
                    </span>
                  </button>
                  <button onClick={handleSubmit} disabled={uploading} className="flex pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#23a0b5] rounded-[8px] border-none relative overflow-hidden z-[35] hover:bg-sky-700 cursor-pointer">
                    <span className="h-[24px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[16px] font-normal leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[36]">
                      Get My Free Ticket
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
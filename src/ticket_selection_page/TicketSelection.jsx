import React, { useState } from 'react';
import "./TicketSelection.css";

export default function TicketSelection({ onNext }) {
  const [selectedTicket, setSelectedTicket] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const handleNext = () => {
    if (!selectedTicket) {
      alert("Please select a ticket type.");
      return;
    }
    onNext({ ticketType: selectedTicket, quantity: ticketQuantity });
  };

  const clearInputs = () => {
    setSelectedTicket("");
    setTicketQuantity(1);
  };

  return (
    <div className="main-container w-[1440px] h-[1118px] bg-[#02191d] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[1200px] h-[76px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] justify-between items-center flex-nowrap bg-[rgba(5,37,44,0.4)] rounded-[24px] border-solid border border-[#197686] absolute top-[24px] left-1/2 translate-x-[-50%] translate-y-0 overflow-hidden z-[49]">
        <input className="w-[1200px] h-[76px] shrink-0 bg-transparent border-none absolute top-[-1px] left-[-1px] z-[66]" />
        <div className="flex w-[91.793px] gap-[8px] items-center shrink-0 flex-nowrap relative z-50">
          <div className="flex w-[40px] pt-[6px] pr-[8px] pb-[6px] pl-[8px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#042e34] rounded-[12px] border-solid border border-[#0e464e] relative z-[51]">
            <div className="w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/44f47c15-32a7-4b56-903f-197e83e33343.png)] bg-cover bg-no-repeat relative overflow-hidden z-[52]" />
          </div>
          <div className="w-[46.09px] h-[25.154px] shrink-0 bg-[url(../assets/images/6789ea23-eef9-4f47-936e-3bab2e76f9fb.png)] bg-cover bg-no-repeat relative z-[53]" />
        </div>
        <div className="flex w-[341px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[54]">
          <div className="flex w-[74px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap relative z-[55]">
            <span className="h-[14px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[18px] font-normal leading-[14px] text-[#fff] relative text-left whitespace-nowrap z-[56]">
              Events
            </span>
          </div>
          <div className="flex w-[108px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap relative z-[57]">
            <span className="h-[14px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[18px] font-normal leading-[14px] text-[#b3b3b3] relative text-left whitespace-nowrap z-[58]">
              My Tickets
            </span>
          </div>
          <div className="flex w-[127px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap relative z-[59]">
            <span className="h-[14px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[18px] font-normal leading-[14px] text-[#b3b3b3] relative text-left whitespace-nowrap z-[60]">
              About Project
            </span>
          </div>
        </div>
        <button className="flex w-[169px] gap-[16px] items-center shrink-0 flex-nowrap border-none relative z-[61] pointer">
          <div className="flex w-[169px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[rgba(213,234,0,0.1)] relative z-[62]">
            <span className="h-[20px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[16px] font-normal leading-[20px] text-[#0a0c11] relative text-left uppercase whitespace-nowrap z-[63]">
              My Tickets
            </span>
            <div className="flex w-[16px] justify-center items-center shrink-0 flex-nowrap rounded-[594px] relative z-[64]">
              <div className="w-[17px] h-[7.364px] shrink-0 bg-[url(../assets/images/6da9a84f-8050-4986-8519-254f0f70d8e1.png)] bg-cover bg-no-repeat relative z-[65]" />
            </div>
          </div>
        </button>
      </div>
      
      <div className="flex w-[1440px] h-[1082px] pt-[112px] pr-0 pb-[112px] pl-0 flex-col gap-[80px] items-center flex-nowrap bg-[rgba(2,25,29,0.2)] absolute top-[34px] left-1/2 translate-x-[-50%] translate-y-0 overflow-hidden">
        <div className="flex flex-col gap-[48px] items-center self-stretch shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[700px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col gap-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#041e22] rounded-[40px] border-solid border border-[#0e464f] relative box-content z-[2]">
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[3]">
              <div className="flex gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[4]">
                <div className="flex flex-col gap-[16px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[5]">
                  <span className="h-[32px] self-stretch shrink-0 basis-auto font-['JejuMyeongjo'] text-[32px] font-normal leading-[32px] text-[#fff] relative text-left whitespace-nowrap z-[6]">
                    Ticket Selection
                  </span>
                </div>
                <span className="h-[24px] shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[7]">
                  Step 1/3
                </span>
              </div>
              <div className="h-[4px] self-stretch shrink-0 bg-[#0e464e] rounded-[5px] relative overflow-hidden z-[8]">
                <div className="w-[232px] h-[4px] bg-[#23a0b5] rounded-[5px] relative overflow-hidden z-[9] mt-0 mr-0 mb-0 ml-0" />
              </div>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[32px] justify-center items-start self-stretch shrink-0 flex-nowrap bg-[#08252b] rounded-[32px] border-solid border border-[#0e464e] relative z-10">
              <div className="flex h-[200px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[rgba(10,12,17,0.020000000000000004)] rounded-[24px] border-solid border-t-2 border-t-[#07363e] border-solid border-l-2 border-l-[#07363e] border-solid border-r-2 border-r-[#07363e] relative z-[11]">
                <div className="flex flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[12]">
                  <span className="h-[62px] self-stretch shrink-0 basis-auto font-['Road_Rage'] text-[62px] font-normal leading-[62px] text-[#fafafa] relative text-center whitespace-nowrap z-[13]">
                    Techember Fest ”25
                  </span>
                  <span className="flex w-[340px] h-[48px] justify-center items-start shrink-0 font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-center z-[14]">
                    Join us for an unforgettable experience at [Event Name]!
                    Secure your spot now.
                  </span>
                </div>
                <div className="flex w-[359px] gap-[16px] items-start shrink-0 flex-nowrap relative z-[15]">
                  <div className="w-[134px] h-[24px] shrink-0 font-['Roboto'] text-[16px] font-normal bg-[url(../assets/images/fdff9b9e-7be1-4b5d-a136-602ba1573be1.png)] bg-cover bg-no-repeat leading-[24px] relative z-[16]" />
                  <span className="h-[24px] shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[17]">
                    | |
                  </span>
                  <span className="h-[24px] shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[18]">
                    March 15, 2025 | 7:00 PM
                  </span>
                </div>
              </div>
              <div className="h-[4px] self-stretch shrink-0 bg-[#07363e] relative overflow-hidden z-[19]" />
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-20">
                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[21]">
                  Select Ticket Type:
                </span>
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[16px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#042127] rounded-[24px] border-solid border border-[#07363e] relative z-[22]">
                  <div className="flex justify-between items-start self-stretch shrink-0 flex-wrap relative z-[23]">
                    <button onClick={() => setSelectedTicket("Free")} className={`flex w-[158px] h-[110px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[12px] items-start flex-nowrap rounded-[12px] border-solid border border-[#197686] relative box-content overflow-hidden z-[24] ${selectedTicket === "Free" ? "bg-[#12464e]" : "bg-[#042127]"} hover:bg-[#12464e] cursor-pointer`}>
                      <span className="h-[26px] shrink-0 basis-auto font-['Roboto'] text-[24px] font-semibold leading-[26px] text-[#fff] relative text-left whitespace-nowrap z-[25]">
                        Free
                      </span>
                      <div className="flex flex-col justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[26]">
                        <span className="h-[24px] shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left uppercase whitespace-nowrap z-[27]">
                          Regular Access
                        </span>
                        <span className="h-[21px] shrink-0 basis-auto font-['Roboto'] text-[14px] font-normal leading-[21px] text-[#d9d9d9] relative text-left whitespace-nowrap z-[28]">
                          20/52
                        </span>
                      </div>
                    </button>
                    <button onClick={() => setSelectedTicket("$150 VIP")} className={`flex w-[158px] h-[110px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[12px] items-start flex-nowrap rounded-[12px] border-solid border-2 border-[#197686] relative box-content overflow-hidden z-[29] ${selectedTicket === "$150 VIP" ? "bg-[#12464e]" : "bg-[#042127]"} hover:bg-[#12464e] cursor-pointer`}>
                      <span className="h-[26px] shrink-0 basis-auto font-['Roboto'] text-[24px] font-semibold leading-[26px] text-[#fff] relative text-left whitespace-nowrap z-30">
                        $150
                      </span>
                      <div className="flex flex-col justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[31]">
                        <span className="h-[24px] shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left uppercase whitespace-nowrap z-[32]">
                          VIP Access{" "}
                        </span>
                        <span className="h-[21px] shrink-0 basis-auto font-['Roboto'] text-[14px] font-normal leading-[21px] text-[#d9d9d9] relative text-left whitespace-nowrap z-[33]">
                          20/52
                        </span>
                      </div>
                    </button>
                    <button onClick={() => setSelectedTicket("$150 VVIP")} className={`flex w-[158px] h-[110px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[12px] items-start flex-nowrap rounded-[12px] border-solid border-2 border-[#197686] relative box-content overflow-hidden z-[34] ${selectedTicket === "$150 VVIP" ? "bg-[#12464e]" : "bg-[#042127]"} hover:bg-[#12464e] cursor-pointer`}>
                      <span className="h-[26px] shrink-0 basis-auto font-['Roboto'] text-[24px] font-semibold leading-[26px] text-[#fff] relative text-left whitespace-nowrap z-[35]">
                        $150
                      </span>
                      <div className="flex flex-col justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[36]">
                        <span className="h-[24px] shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left uppercase whitespace-nowrap z-[37]">
                          VVIP Access
                        </span>
                        <span className="h-[21px] shrink-0 basis-auto font-['Roboto'] text-[14px] font-normal leading-[21px] text-[#d9d9d9] relative text-left whitespace-nowrap z-[38]">
                          20/52
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
             
              {/* Number of Tickets Sub-section */}
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[39]">
                <label className="h-[24px] self-stretch shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-40">
                  Number of Tickets:
                </label>
                <input type="number" min="1" max="10" value={ticketQuantity} onChange={(e) => setTicketQuantity(e.target.value)}
                  className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#07363e] relative box-content z-[41] text-white" />
              </div>
              <div className="flex h-[48px] gap-[24px] justify-end items-end self-stretch shrink-0 flex-nowrap relative z-[44]">
                <button onClick={clearInputs} className="flex pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap rounded-[8px] border-solid border border-[#23a0b5] relative box-content overflow-hidden z-[45] hover:bg-[#12464e] cursor-pointer">
                  <span className="h-[24px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[16px] font-normal leading-[24px] text-[#23a0b5] relative text-left whitespace-nowrap z-[46]">
                    Cancel
                  </span>
                </button>
                <button onClick={handleNext} className="flex pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#23a0b5] rounded-[8px] border-none relative overflow-hidden z-[47] hover:bg-sky-700 cursor-pointer">
                  <span className="h-[24px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[16px] font-normal leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[48]">
                    Next
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

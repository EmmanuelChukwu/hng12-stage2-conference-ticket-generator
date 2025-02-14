import React from "react";
import "./TicketReady.css";

export default function TicketReady({ avatar, fullName, email, ticketType, quantity, specialRequest, onClear }) {
  
  
  
  return (
    <div className="main-container w-[1440px] h-[1024px] bg-[#02191d] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[1200px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] justify-between items-center flex-nowrap bg-[rgba(5,37,44,0.4)] rounded-[24px] border-solid border border-[#197686] relative z-[97] mt-[24px] mr-0 mb-0 ml-[120px]">
        <div className="flex w-[91.793px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[98]">
          <div className="flex w-[40px] pt-[6px] pr-[8px] pb-[6px] pl-[8px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#042e34] rounded-[12px] border-solid border border-[#0e464e] relative z-[99]">
            <div className="w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/fced6574-5797-4c3f-9195-9180243585fa.png)] bg-cover bg-no-repeat relative overflow-hidden z-[100]" />
          </div>
          <div className="w-[46.09px] h-[25.154px] shrink-0 bg-[url(../assets/images/450f2399-eb35-4b20-9368-4eb4f4466fa7.png)] bg-cover bg-no-repeat relative z-[101]" />
        </div>
        <div className="flex w-[341px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[102]">
          <div className="flex w-[74px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap relative z-[103]">
            <span className="h-[14px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[18px] font-normal leading-[14px] text-[#fff] relative text-left whitespace-nowrap z-[104]">
              Events
            </span>
          </div>
          <div className="flex w-[108px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap relative z-[105]">
            <span className="h-[14px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[18px] font-normal leading-[14px] text-[#b3b3b3] relative text-left whitespace-nowrap z-[106]">
              My Tickets
            </span>
          </div>
          <div className="flex w-[127px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center shrink-0 flex-nowrap relative z-[107]">
            <span className="h-[14px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[18px] font-normal leading-[14px] text-[#b3b3b3] relative text-left whitespace-nowrap z-[108]">
              About Project
            </span>
          </div>
        </div>
        <button className="flex w-[169px] gap-[16px] items-center shrink-0 flex-nowrap border-none relative z-[109] pointer">
          <div className="flex w-[169px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[rgba(213,234,0,0.1)] relative z-[110]">
            <span className="h-[20px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[16px] font-normal leading-[20px] text-[#0a0c11] relative text-left uppercase whitespace-nowrap z-[111]">
              My Tickets
            </span>
            <div className="flex w-[16px] justify-center items-center shrink-0 flex-nowrap rounded-[594px] relative z-[112]">
              <div className="w-[17px] h-[7.364px] shrink-0 bg-[url(../assets/images/c412dd36-9fbd-4e39-8f90-a2c2d8140a93.png)] bg-cover bg-no-repeat relative z-[113]" />
            </div>
          </div>
        </button>
      </div>
      <div className="flex w-[1440px] h-[1249px] pt-[112px] pr-0 pb-[112px] pl-0 flex-col gap-[80px] items-center flex-nowrap absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
        <div className="flex flex-col gap-[48px] items-center self-stretch shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[700px] pt-[48px] pr-[48px] pb-[48px] pl-[48px] flex-col gap-[32px] justify-center items-center shrink-0 flex-nowrap bg-[#041e22] rounded-[24px] border-solid border border-[#0e464f] relative box-content z-[2]">
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[3]">
              <div className="flex gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[4]">
                <div className="flex flex-col gap-[16px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[5]">
                  <span className="h-[32px] self-stretch shrink-0 basis-auto font-['JejuMyeongjo'] text-[32px] font-normal leading-[32px] text-[#fff] relative text-left whitespace-nowrap z-[6]">
                    Ready
                  </span>
                </div>
                <span className="h-[24px] shrink-0 basis-auto font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[7]">
                  Step 3/3
                </span>
              </div>
              <div className="h-[4px] self-stretch shrink-0 bg-[#0e464e] rounded-[5px] relative overflow-hidden z-[8]">
                <div className="w-[232px] h-[4px] bg-[#23a0b5] rounded-[5px] relative overflow-hidden z-[9] mt-0 mr-0 mb-0 ml-0" />
              </div>
            </div>
            <div className="flex flex-col gap-[32px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-10">
              <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[11]">
                <span className="h-[41px] self-stretch shrink-0 basis-auto font-['Alatsi'] text-[32px] font-normal leading-[40.96px] text-[#fff] relative text-center whitespace-nowrap z-[12]">
                  Your Ticket is Booked!
                </span>
                <div className="w-[604px] self-stretch shrink-0 font-['Roboto'] text-[16px] font-normal leading-[24px] relative text-center whitespace-nowrap z-[13]">
                  <span className="font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-center">
                    Check your email for a copy or you can{" "}
                  </span>
                  <span className="font-['Roboto'] text-[16px] font-bold leading-[24px] text-[#fafafa] relative text-center">
                    download
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] items-center self-stretch shrink-0 flex-nowrap relative z-[14]">
                <div className="flex pt-[32px] pr-[21px] pb-[32px] pl-[21px] flex-col gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[24px] relative z-[15]">
                  <div className="w-[300px] h-[600px] shrink-0 relative overflow-hidden z-[16]">
                    <div className="flex w-[260px] h-[446px] pt-[14px] pr-[14px] pb-[14px] pl-[14px] items-center flex-nowrap bg-[rgba(3,29,33,0.1)] rounded-[16px] border-solid border border-[#23a0b5] relative box-content z-[18] mt-[20px] mr-0 mb-0 ml-[20px]">
                      <div className="flex w-[232px] flex-col gap-[20px] items-center shrink-0 flex-nowrap relative z-[19]">
                        <div className="flex w-[175px] flex-col items-center shrink-0 flex-nowrap relative z-20">
                          <span className="h-[34px] self-stretch shrink-0 basis-auto font-['Road_Rage'] text-[34px] font-normal leading-[34px] text-[#fff] relative text-center whitespace-nowrap z-[21]">
                            Techember Fest ”25
                          </span>
                          <img src={avatar} alt="Avatar" className="w-[140px] h-[140px] shrink-0 bg-cover bg-no-repeat rounded-[12px] relative z-[25]" />
                          <div className="flex w-[151px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] flex-col gap-[4px] justify-center items-center shrink-0 flex-nowrap relative z-[22]">
                            <div className="w-[143px] h-[15px] shrink-0 font-['Roboto'] text-[10px] font-normal bg-[url(../assets/images/b3e2bbd2-a983-42d9-8134-2932cad6f2f2.png)] bg-cover bg-no-repeat leading-[15px] relative z-[23]" />
                            <div className="w-[126px] h-[15px] shrink-0 font-['Roboto'] text-[10px] font-normal bg-[url(../assets/images/c3ac313a-2545-4740-b13d-3919aad2db5e.png)] bg-cover bg-no-repeat leading-[15px] relative z-[24]" />
                          </div>
                        </div>
                        <div className="flex pt-[4px] pr-[4px] pb-[4px] pl-[4px] flex-col justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#07333c] rounded-[8px] border-solid border border-[#123d43] relative box-content z-[26]">
                          <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#12464e] relative z-[27]">
                            <div className="flex pt-[4px] pr-[4px] pb-[4px] pl-[4px] flex-col gap-[4px] justify-center items-start grow shrink-0 basis-0 flex-nowrap border-solid border-r border-r-[#12464e] relative z-[28]">
                              <span className="h-[15px] shrink-0 basis-auto font-['Roboto'] text-[10px] font-normal opacity-[0.33] leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-[29]">
                                Enter your name
                              </span>
                              <span className="h-[18px] shrink-0 basis-auto font-['Roboto'] text-[12px] font-bold leading-[18px] text-[#fff] relative text-left whitespace-nowrap z-30">
                                {fullName}
                              </span>
                            </div>
                            <div className="flex pt-[4px] pr-[4px] pb-[4px] pl-[4px] flex-col gap-[4px] justify-center items-start grow shrink-0 basis-0 flex-nowrap relative z-[31]">
                              <span className="h-[15px] shrink-0 basis-auto font-['Roboto'] text-[10px] font-normal opacity-[0.33] leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-[32]">
                                Enter your email *
                              </span>
                              <span className="h-[18px] shrink-0 basis-auto font-['Roboto'] text-[12px] font-bold leading-[18px] text-[#fff] relative text-left whitespace-nowrap z-[33]">
                                {email}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#12464e] relative z-[34]">
                            <div className="flex pt-[4px] pr-[4px] pb-[4px] pl-[4px] flex-col gap-[4px] justify-center items-start grow shrink-0 basis-0 flex-nowrap border-solid border-r border-r-[#12464e] relative z-[35]">
                              <span className="h-[15px] shrink-0 basis-auto font-['Roboto'] text-[10px] font-normal opacity-[0.33] leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-[36]">
                                Ticket Type:
                              </span>
                              <span className="h-[15px] shrink-0 basis-auto font-['Roboto'] text-[10px] font-normal leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-[37]">
                                {ticketType}
                              </span>
                            </div>
                            <div className="flex pt-[4px] pr-[4px] pb-[4px] pl-[4px] flex-col gap-[4px] justify-center items-start grow shrink-0 basis-0 flex-nowrap relative z-[38]">
                              <span className="h-[15px] shrink-0 basis-auto font-['Roboto'] text-[10px] font-normal opacity-[0.33] leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-[39]">
                                Ticket for :
                              </span>
                              <span className="h-[15px] shrink-0 basis-auto font-['Roboto'] text-[10px] font-normal leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-40">
                                {quantity}
                              </span>
                            </div>
                          </div>
                          <div className="flex pt-[8px] pr-[8px] pb-[8px] pl-[8px] flex-col gap-[4px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[41]">
                            <span className="h-[15px] self-stretch shrink-0 basis-auto font-['Roboto'] text-[10px] font-normal opacity-[0.33] leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-[42]">
                              Special request?
                            </span>
                            <span className="flex w-[208px] h-[30px] justify-start items-start self-stretch shrink-0 font-['Roboto'] text-[10px] font-normal leading-[15px] text-[#fff] relative text-left z-[43]">
                              {specialRequest}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[300px] h-[600px] bg-[url(../assets/images/78669f94-66a1-4852-9b18-ca43149a0572.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[17]" />
                  </div>
                  <div className="w-[236px] h-[68px] shrink-0 absolute top-[542px] left-1/2 translate-x-[-50%] translate-y-0 z-[44]">
                    <div className="w-[6.586px] h-[68px] absolute top-0 left-[27.442px] z-[47]">
                      <div className="flex w-[6.586px] h-[56.241px] justify-between items-center relative z-[49] mt-0 mr-0 mb-0 ml-0">
                        <div className="w-[2.195px] h-[56.241px] shrink-0 bg-[url(../assets/images/65e20542-35ce-4163-ac32-6808d631e604.png)] bg-[length:100%_100%] bg-no-repeat relative z-[48]" />
                        <div className="w-[2.195px] h-[56.241px] shrink-0 bg-[url(../assets/images/19a0fd1a-b853-4170-b0d3-5a97a7d09f42.png)] bg-[length:100%_100%] bg-no-repeat relative z-[49]" />
                      </div>
                      <span className="block h-[7.669px] font-['Inter'] text-[12px] font-normal leading-[7.669px] text-[#fff] relative text-center whitespace-nowrap z-50 mt-[4.09px] mr-0 mb-0 ml-[3.293px]" />
                    </div>
                    <div className="w-[6.586px] h-[68px] absolute top-0 left-0 z-[51]">
                      <div className="flex w-[6.586px] h-[56.241px] justify-between items-center relative z-[53] mt-0 mr-0 mb-0 ml-0">
                        <div className="w-[2.195px] h-[56.241px] shrink-0 bg-[url(../assets/images/88eb1678-0ddf-46bd-a579-25a7b1df383a.png)] bg-[length:100%_100%] bg-no-repeat relative z-[52]" />
                        <div className="w-[2.195px] h-[56.241px] shrink-0 bg-[url(../assets/images/39a47c16-4e1d-4bdc-8f32-1d2f4a07ca27.png)] bg-[length:100%_100%] bg-no-repeat relative z-[53]" />
                      </div>
                      <span className="block h-[7.669px] font-['Inter'] text-[12px] font-normal leading-[7.669px] text-[#fff] relative text-center whitespace-nowrap z-[54] mt-[4.09px] mr-0 mb-0 ml-[3.293px]" />
                    </div>
                    <div className="w-[3.72%] h-[75.19%] bg-[url(../assets/images/69f01af7-4787-440e-9225-2b91003b9455.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[3.72%] z-[55]" />
                    <div className="w-[1.4%] h-3/4 bg-[url(../assets/images/7ffef083-6ea3-48ba-8401-e9eea19effd7.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[8.84%] z-[56]" />
                    <div className="w-[87.814px] h-[62.887px] absolute top-0 left-[38.418px] z-[57]">
                      <div className="w-[87.814px] h-[51.128px] relative z-[68] mt-0 mr-0 mb-0 ml-0">
                        <div className="w-[2.5%] h-full bg-[url(../assets/images/76b273b9-ad55-4b31-9fa8-e27e91823145.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[58]" />
                        <div className="w-[5%] h-full bg-[url(../assets/images/09463994-cca5-4f09-8f5d-c287cd66a8ab.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[7.5%] z-[59]" />
                        <div className="w-[2.5%] h-full bg-[url(../assets/images/29bfc3a7-fa1f-41d9-9014-309a05a66cbb.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[27.5%] z-[60]" />
                        <div className="w-[7.5%] h-full bg-[url(../assets/images/68aa96a3-b464-4cd1-9b82-cf38ba944a76.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[35%] z-[61]" />
                        <div className="w-[2.5%] h-full bg-[url(../assets/images/06aef6df-5cbb-4bb2-ad1d-942f3ce003e8.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[45%] z-[62]" />
                        <div className="w-[5%] h-full bg-[url(../assets/images/dda2cecd-944f-4fb8-8ed8-146485e387eb.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-1/2 z-[63]" />
                        <div className="w-[2.5%] h-full bg-[url(../assets/images/37b9e4d3-f8d5-468b-950d-2149114e86f7.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[62.5%] z-[64]" />
                        <div className="w-[2.5%] h-full bg-[url(../assets/images/a931e8c0-daa6-4143-9e8f-063c2577e528.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[87.5%] z-[67]" />
                        <div className="w-[2.5%] h-full bg-[url(../assets/images/6a315b5a-8f14-44e0-8120-f79860c47079.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[97.5%] z-[68]" />
                        <div className="flex w-[7.5%] h-full justify-between items-center absolute top-0 left-3/4 z-[66]">
                          <div className="w-[2.195px] h-[51.128px] shrink-0 bg-[url(../assets/images/26566167-dd81-497c-94bf-5598b5f17d59.png)] bg-[length:100%_100%] bg-no-repeat relative z-[65]" />
                          <div className="w-[2.195px] h-[51.128px] shrink-0 bg-[url(../assets/images/8eae21c7-80d1-4004-a1c6-14f5a2e852b7.png)] bg-[length:100%_100%] bg-no-repeat relative z-[66]" />
                        </div>
                      </div>
                      <span className="flex w-[49.395px] h-[7.669px] justify-center items-start font-['Inter'] text-[12px] font-normal leading-[7.669px] text-[#fff] relative text-center whitespace-nowrap z-[69] mt-[4.09px] mr-0 mb-0 ml-[17.014px]">
                        234567
                      </span>
                    </div>
                    <div className="w-[6.586px] h-[68px] absolute top-0 left-[128.428px] z-[70]">
                      <div className="flex w-[6.586px] h-[56.241px] justify-between items-center relative z-[72] mt-0 mr-0 mb-0 ml-0">
                        <div className="w-[2.195px] h-[56.241px] shrink-0 bg-[url(../assets/images/19300e1f-d10e-4bdc-babb-679711c787ef.png)] bg-[length:100%_100%] bg-no-repeat relative z-[71]" />
                        <div className="w-[2.195px] h-[56.241px] shrink-0 bg-[url(../assets/images/e576932d-8d7a-4594-91bb-c2d58185b6ff.png)] bg-[length:100%_100%] bg-no-repeat relative z-[72]" />
                      </div>
                      <span className="block h-[7.669px] font-['Inter'] text-[12px] font-normal leading-[7.669px] text-[#fff] relative text-center whitespace-nowrap z-[73] mt-[4.09px] mr-0 mb-0 ml-[3.293px]" />
                    </div>
                    <div className="w-[83.423px] h-[62.887px] absolute top-0 left-[137.209px] z-[74]">
                      <div className="w-[83.423px] h-[51.128px] relative z-[86] mt-0 mr-0 mb-0 ml-0">
                        <div className="w-[2.63%] h-full bg-[url(../assets/images/12f340c0-78cc-4fb7-83d6-a556afe8e0bc.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[75]" />
                        <div className="w-[2.63%] h-full bg-[url(../assets/images/e3a050f0-de72-4855-8d35-8ffa193a4359.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[7.89%] z-[76]" />
                        <div className="w-[7.89%] h-full bg-[url(../assets/images/f1ba4e5e-e7eb-4dd3-97c8-a309fbe5e0d9.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[18.42%] z-[77]" />
                        <div className="w-[2.63%] h-full bg-[url(../assets/images/76e7c812-be55-49e0-81e8-7107501958c3.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[28.95%] z-[78]" />
                        <div className="w-[5.26%] h-full bg-[url(../assets/images/aa6f7e7a-bd0c-49be-b332-dd1c88cb8c3f.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[36.84%] z-[79]" />
                        <div className="w-[5.26%] h-full bg-[url(../assets/images/cb51145c-2f8b-41a0-8d5c-f1432056826c.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[47.37%] z-[80]" />
                        <div className="w-[7.89%] h-full bg-[url(../assets/images/b54f023f-d372-482c-a3a2-db481da156d2.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[55.26%] z-[81]" />
                        <div className="w-[2.63%] h-full bg-[url(../assets/images/ef1aec72-a890-498c-9a0d-156732d3e8c9.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[68.42%] z-[82]" />
                        <div className="w-[5.26%] h-full bg-[url(../assets/images/e9aab267-060e-4bd4-b892-5a5ba5d5b87e.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[73.68%] z-[83]" />
                        <div className="w-[5.26%] h-full bg-[url(../assets/images/6cf6d391-ec2e-47a7-8f21-1ff402eb9357.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[81.58%] z-[84]" />
                        <div className="flex w-[7.89%] h-full justify-between items-center absolute top-0 left-[92.11%] z-[86]">
                          <div className="w-[2.195px] h-[51.128px] shrink-0 bg-[url(../assets/images/8f55f4bf-e5b2-4cba-8393-7c5ea06168b3.png)] bg-[length:100%_100%] bg-no-repeat relative z-[85]" />
                          <div className="w-[2.195px] h-[51.128px] shrink-0 bg-[url(../assets/images/d56fdf30-e868-4b91-b5fa-5fcf15ffd767.png)] bg-[length:100%_100%] bg-no-repeat relative z-[86]" />
                        </div>
                      </div>
                      <span className="flex w-[47.2px] h-[7.669px] justify-center items-start font-['Inter'] text-[12px] font-normal leading-[7.669px] text-[#fff] relative text-center whitespace-nowrap z-[87] mt-[4.09px] mr-0 mb-0 ml-[22.502px]">
                        891026
                      </span>
                    </div>
                    <div className="w-[6.586px] h-[68px] absolute top-0 left-[229.414px] z-[88]">
                      <div className="flex w-[6.586px] h-[56.241px] justify-between items-center relative z-[90] mt-0 mr-0 mb-0 ml-0">
                        <div className="w-[2.195px] h-[56.241px] shrink-0 bg-[url(../assets/images/2a37c0da-b6e1-4e41-a89e-1824d37547da.png)] bg-[length:100%_100%] bg-no-repeat relative z-[89]" />
                        <div className="w-[2.195px] h-[56.241px] shrink-0 bg-[url(../assets/images/e8b16c75-8e30-45e1-9c1b-a5f4b90be229.png)] bg-[length:100%_100%] bg-no-repeat relative z-[90]" />
                      </div>
                      <span className="block h-[7.669px] font-['Inter'] text-[12px] font-normal leading-[7.669px] text-[#fff] relative text-center whitespace-nowrap z-[91] mt-[4.09px] mr-0 mb-0 ml-[3.293px]" />
                    </div>
                    <div className="w-[6.586px] h-[7.669px] absolute top-[55.218px] left-[1.098px] z-[45]">
                      <span className="flex h-full justify-start items-start font-['Inter'] text-[12px] font-normal leading-[7.669px] text-[#fff] absolute top-0 left-0 text-left whitespace-nowrap z-[46]">
                        1
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex h-[48px] gap-[24px] justify-end items-end self-stretch shrink-0 flex-nowrap relative z-[92]">
                  <button onClick={onClear} className="flex pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap rounded-[8px] border-solid border border-[#23a0b5] relative box-content overflow-hidden z-[93] hover:bg-[#12464e] cursor-pointer">
                    <span className="h-[24px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[16px] font-normal leading-[24px] text-[#23a0b5] relative text-left whitespace-nowrap z-[94]">
                      Book Another Ticket
                    </span>
                  </button>
                  <button className="flex pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#23a0b5] rounded-[8px] border-none relative overflow-hidden z-[95] hover:bg-sky-700 cursor-pointer">
                    <span className="h-[24px] shrink-0 basis-auto font-['JejuMyeongjo'] text-[16px] font-normal leading-[24px] text-[#fafafa] relative text-left whitespace-nowrap z-[96]">
                      Download Ticket
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
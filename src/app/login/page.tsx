import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function LoginPage() {
  return (
    <div className={`min-w-screen w-screen ${inter.className}`}>
      <div className="flex lg:flex-row relative">
        <div className="h-4 lg:!h-6 absolute top-6 left-6 lg:top-12 lg:left-12 z-50">
          <a
            href="#"
            className="focus:outline-2 focus:outline-black focus:outline-offset-8"
          >
            <svg
              role="icon"
              height="100%"
              viewBox="0 0 80 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="title desc"
            >
              <title>Linktree Logo</title>
              <desc>Linktree Logo Symbol and Word Mark</desc>
              <path
                d="M0 1.72687H2.25964V13.6313H8.50582V15.7244H0V1.72687ZM10.7287 1.72687C10.9121 1.72444 11.0941 1.75816 11.2644 1.82609C11.4348 1.89402 11.59 1.99484 11.7214 2.12278C11.8528 2.25073 11.9576 2.4033 12.03 2.57178C12.1024 2.74026 12.1409 2.92135 12.1433 3.1047C12.1433 3.47987 11.9943 3.83967 11.729 4.10496C11.4637 4.37024 11.1039 4.51928 10.7287 4.51928C10.3536 4.51928 9.99375 4.37024 9.72847 4.10496C9.46318 3.83967 9.31415 3.47987 9.31415 3.1047C9.31491 2.92087 9.3523 2.73903 9.42412 2.56981C9.49594 2.40058 9.60076 2.24736 9.73245 2.11909C9.86414 1.99082 10.0201 1.89008 10.1911 1.82273C10.3622 1.75539 10.5449 1.7228 10.7287 1.72687ZM9.62645 5.63991H11.7942V15.7244H9.62645V5.63991ZM13.0618 5.63991H15.2296V7.03612C15.8714 5.97059 16.9737 5.36435 18.425 5.36435C20.7765 5.36435 22.2462 7.20146 22.2462 10.1225V15.7244H20.0784V10.3062C20.0784 8.41395 19.2517 7.34843 17.7587 7.34843C16.1249 7.34843 15.2247 8.46906 15.2247 10.4899V15.7244H13.057L13.0618 5.63991ZM23.3852 1.72687H25.553V10.5817L29.5946 5.63991H32.3135L27.9963 10.692L32.3135 15.7244H29.5946L25.553 10.8022V15.7244H23.3852V1.72687ZM33.1586 3.07408H35.3631V5.64604H37.9351V7.44641H35.3631V12.6442C35.3631 13.3068 35.7673 13.7109 36.3919 13.7109H37.8445V15.7305H36.098C34.2058 15.7305 33.1586 14.6099 33.1586 12.6271V3.07408ZM38.8904 5.64604H41.0582V6.89527C41.5909 5.93998 42.4911 5.37047 43.5934 5.37047C43.8478 5.35888 44.1024 5.38993 44.3466 5.46233V7.48315C44.0813 7.42486 43.8097 7.40017 43.5383 7.40966C41.94 7.40966 41.0582 8.75688 41.0582 11.0655V15.7305H38.8904V5.64604ZM49.4158 5.37047C51.804 5.37047 54.3944 6.82179 54.3944 10.9185V11.2125H46.6234C46.79 13.0116 47.8359 14.0037 49.5811 14.0037C50.8304 14.0037 51.8959 13.3239 52.1347 12.3882H54.3393C54.1188 14.4078 52.0245 16.0061 49.5811 16.0061C46.4581 16.0061 44.4936 13.9669 44.4936 10.6797C44.4936 7.75259 46.3858 5.36435 49.4158 5.36435V5.37047ZM52.0796 9.41211C51.7673 8.16288 50.7936 7.37292 49.4158 7.37292C48.0931 7.37292 47.1574 8.18125 46.79 9.41211H52.0796ZM60.2731 5.37047C62.6614 5.37047 65.2517 6.82179 65.2517 10.9185V11.2125H57.4807C57.646 13.0116 58.6932 14.0037 60.4385 14.0037C61.6877 14.0037 62.7532 13.3239 62.992 12.3882H65.1966C64.9761 14.4078 62.8818 16.0061 60.4385 16.0061C57.3154 16.0061 55.3497 13.9669 55.3497 10.6797C55.3497 7.75259 57.2419 5.36435 60.2731 5.36435V5.37047ZM62.9369 9.41211C62.6246 8.16288 61.651 7.37292 60.2731 7.37292C58.9504 7.37292 58.0135 8.18125 57.646 9.41211H62.9369Z"
                fill="#000000"
              ></path>
              <path
                d="M65.7852 5.33374H69.6615L66.9058 2.70668L68.4306 1.13901L71.0577 3.83956V0H73.3357V3.83956L75.9627 1.14513L77.4863 2.70668L74.7319 5.32762H78.607V7.49541H74.7098L77.4827 10.1898L75.9627 11.7208L72.1967 7.93631L68.4306 11.7208L66.9058 10.196L69.6798 7.50153H65.7852V5.33374ZM71.0515 10.6062H73.3296V15.7502H71.0515V10.6062Z"
                fill="#43E660"
              ></path>
            </svg>
          </a>
        </div>
        <div className="relative pt-8 flex w-full md:py-6 md:px-12 lg:p-12 lg:pb-3 min-h-screen justify-center">
          <div className="p-6 pt-16 lg:!pt-24 lg:w-[640px] flex flex-col">
            <div className="md:container mx-auto h-full">
              <div className="md:container mx-auto h-full flex flex-col">
                <div>
                  <div className="mb-12 mt-2">
                    <h1 className="text-black text-[32px] font-extrabold leading-[1.2] tracking-[-1px] lg:text-[48px] lg:tracking-[-2px] text-center">
                      Welcome back
                    </h1>
                    <p className="text-[#676b5f] text-base text-center leading-[1.5] tracking-[-.32px]">Log in to your Linktree</p>
                  </div>
                  <form>
                    <div className="mb-2">
                      <div className="rounded-[10px] relative focus-within:ring-2 focus-within:ring-black transition duration-75 ease-out w-full overflow-hidden hover:shadow-[inset_0_0_0_2px_#e0e2d9] hover:focus-within:shadow-none">
                        <div className="flex rounded-[10px] leading-none border-solid border-2 overflow-hidden w-full border-transparent">
                          <div className="relative grow">
                            <input
                              name="username"
                              type="text"
                              placeholder="Email or username"
                              aria-invalid="false"
                              aria-labelledby="label-ltclid0"
                              className="peer text-black leading-[48px] placeholder:leading-[48px] pt-8 placeholder-transparent text-sm h-12 block p-4 w-full rounded-sm bg-[#f6f7f5] transition duration-75 ease-out !outline-none"
                            />
                            <label
                              htmlFor="label-ltclid0"
                              className="absolute pointer-events-none left-4 text-sm transition-all transform -translate-y-2.5 scale-[0.85] top-[13px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:tracking-normal peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 peer-focus:left-md truncate max-w-[calc(100%-(16px*2))] text-[#676b5f]"
                            >
                              Email or username
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="rounded-[10px] relative focus-within:ring-2 focus-within:ring-black transition duration-75 ease-out w-full overflow-hidden hover:shadow-[inset_0_0_0_2px_#e0e2d9] hover:focus-within:shadow-none">
                        <div className="flex rounded-[10px] leading-none border-solid border-2 overflow-hidden w-full border-transparent">
                          <div className="relative grow">
                            <input
                              name="username"
                              type="text"
                              placeholder="Password"
                              aria-invalid="false"
                              aria-labelledby="label-ltclid0"
                              className="peer text-black leading-[48px] placeholder:leading-[48px] pt-8 placeholder-transparent text-sm h-12 block p-4 w-full rounded-sm bg-[#f6f7f5] transition duration-75 ease-out !outline-none"
                            />
                            <label
                              htmlFor="label-ltclid0"
                              className="absolute pointer-events-none left-4 text-sm transition-all transform -translate-y-2.5 scale-[0.85] top-[13px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:tracking-normal peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 peer-focus:left-md truncate max-w-[calc(100%-(16px*2))] text-[#676b5f]"
                            >
                              Password
                            </label>
                            <button className="absolute top-1 right-1 p-3 rounded-sm outline-2 focus:outline-black text-concrete">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className=" text-black"
                                role="img"
                                aria-hidden="false"
                                aria-labelledby="ltclid2_title "
                              >
                                <title id="ltclid2_title">Eye Hidden</title>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.2756 11.9826L9.73816 10.4451C9.24769 10.7945 8.64765 11 7.99961 11C6.34275 11 4.99961 9.65683 4.99961 7.99998C4.99961 7.35194 5.20508 6.75189 5.55443 6.26142L3.90318 4.61017C2.89039 5.44977 1.94985 6.59653 1.08443 7.99998C3.0232 11.144 5.33902 12.9995 7.99961 12.9995C9.14933 12.9995 10.2447 12.6446 11.2756 11.9826ZM12.0914 11.3842L10.4452 9.73796C10.7943 9.2476 10.9996 8.64777 10.9996 7.99998C10.9996 6.34312 9.65646 4.99998 7.99961 4.99998C7.35182 4.99998 6.75198 5.20529 6.26162 5.5544L4.71867 4.01144C5.74499 3.35282 6.83953 2.99998 7.99961 2.99998C10.6601 2.99998 12.976 4.85581 14.9147 7.99992C14.0506 9.40012 13.1059 10.545 12.0914 11.3842ZM12.8011 12.0938C13.9685 11.1086 15.013 9.79023 15.9289 8.25631V7.74364C13.8985 4.34322 11.2675 1.99998 7.99961 1.99998C6.53909 1.99998 5.20581 2.46802 3.99651 3.28929L2.35316 1.64594L1.64605 2.35304L3.19359 3.90058C2.02767 4.88671 0.987694 6.20727 0.0703125 7.74364V8.25631C2.10077 11.6568 4.73171 13.9995 7.99961 13.9995C9.44879 13.9995 10.7833 13.5295 11.9977 12.7047L13.6461 14.353L14.3532 13.6459L12.8011 12.0938ZM9.99961 7.99998C9.99961 8.37075 9.89871 8.71797 9.72288 9.01565L6.98393 6.27671C7.28162 6.10087 7.62883 5.99998 7.99961 5.99998C9.10418 5.99998 9.99961 6.89541 9.99961 7.99998ZM9.0159 9.72289L6.2767 6.98369C6.10064 7.28151 5.99961 7.62894 5.99961 7.99998C5.99961 9.10455 6.89504 9.99998 7.99961 9.99998C8.37064 9.99998 8.71807 9.89894 9.0159 9.72289Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#8129d9] text-sm ">
                      <a
                        className="ml-4 text-sm text-[#8129d9] inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline"
                        href="https://linktr.ee/request"
                      >
                        Forgot password?
                      </a>
                      &nbsp; <span className="text-black">•</span>&nbsp;
                      <a
                        className="undefined text-sm text-[#8129d9] inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline"
                        href="https://linktr.ee/forgot-username"
                      >
                        Forgot username?
                      </a>
                    </p>
                    <div className="w-full">
                      <button className="relative transition duration-75 ease-out w-full h-12 px-4 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased bg-[#e0e2d9] text-[#a8aaa2] mt-8 hover:bg-primary-alt active:bg-primary-alt pointer-events-none">
                        <span className="flex items-center justify-center">
                          <span className="block font-semibold text-md">Log in</span>
                        </span>
                      </button>
                    </div>
                  </form>
                  <div className="flex justify-center mt-3 !text-[#676b5f]">
                    OR
                  </div>
                  <button className="relative transition duration-75 ease-out w-full h-12 px-4 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased text-black mt-3 bg-white border border-[#e0e2d9] hover:bg-[#e0e2d9] hover:border-[#e0e2d9] active:bg-[#e0e2d9] active:border-[#e0e2d9]">
                    <span className="flex items-center justify-center">
                      <span className="block pr-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-hidden="true"
                          aria-labelledby=" "
                        >
                          <g clip-path="url(#clip0_1_14)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21.6 12.2271C21.6 11.5181 21.5363 10.8362 21.4182 10.1817H12V14.0499H17.3818C17.15 15.2999 16.4454 16.359 15.3863 17.0681V19.5771H18.6182C20.5091 17.8362 21.6 15.2726 21.6 12.2271Z"
                              fill="#4285F4"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 22C14.7 22 16.9637 21.1046 18.6182 19.5772L15.3863 17.0681C14.4909 17.6681 13.3454 18.0227 12 18.0227C9.39545 18.0227 7.1909 16.2636 6.40453 13.9H3.06363V16.4909C4.70908 19.759 8.0909 22 12 22Z"
                              fill="#34A853"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.40454 13.9001C6.20454 13.3001 6.09091 12.6592 6.09091 12.0001C6.09091 11.341 6.20454 10.7001 6.40454 10.1001V7.50917H3.06364C2.38636 8.85917 2 10.3864 2 12.0001C2 13.6137 2.38636 15.141 3.06364 16.491L6.40454 13.9001Z"
                              fill="#FBBC05"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 5.97728C13.4682 5.97728 14.7863 6.48182 15.8228 7.47272L18.6909 4.60454C16.9591 2.99091 14.6954 2 12 2C8.0909 2 4.70908 4.24091 3.06363 7.50909L6.40453 10.1C7.1909 7.73637 9.39545 5.97728 12 5.97728Z"
                              fill="#EA4335"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_14">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(2 2)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="block font-semibold text-base">
                        Continue with Google
                      </span>
                    </span>
                  </button>

                  <button className="relative transition duration-75 ease-out w-full h-12 px-4 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased text-black mt-3 bg-white border border-[#e0e2d9] hover:bg-[#e0e2d9] hover:border-[#e0e2d9] active:bg-[#e0e2d9] active:border-[#e0e2d9]">
                    <span className="flex items-center justify-center">
                      <span className="block pr-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-hidden="true"
                          aria-labelledby=" "
                        >
                          <path
                            d="M20.3399 7.50055C20.2123 7.59956 17.9593 8.86909 17.9593 11.692C17.9593 14.9571 20.8262 16.1122 20.912 16.1408C20.8988 16.2112 20.4565 17.7228 19.4004 19.2629C18.4587 20.6183 17.4752 21.9714 15.9791 21.9714C14.4829 21.9714 14.0979 21.1023 12.3707 21.1023C10.6876 21.1023 10.0891 22 8.72057 22C7.35203 22 6.39714 20.7459 5.29923 19.2057C4.0275 17.3971 3 14.5875 3 11.9208C3 7.64356 5.78108 5.37514 8.51815 5.37514C9.9725 5.37514 11.1848 6.33003 12.0979 6.33003C12.967 6.33003 14.3223 5.31793 15.9769 5.31793C16.604 5.31793 18.857 5.37514 20.3399 7.50055ZM15.1914 3.50715C15.8757 2.69527 16.3597 1.56876 16.3597 0.442244C16.3597 0.286029 16.3465 0.127613 16.3179 0C15.2046 0.0418042 13.8801 0.741474 13.0814 1.66777C12.4543 2.38064 11.8691 3.50715 11.8691 4.64906C11.8691 4.82068 11.8977 4.9923 11.9109 5.0473C11.9813 5.06051 12.0957 5.07591 12.2101 5.07591C13.209 5.07591 14.4653 4.40704 15.1914 3.50715Z"
                            fill="black"
                          ></path>
                        </svg>
                      </span>
                      <span className="block font-semibold text-base">
                        Continue with Apple
                      </span>
                    </span>
                  </button>

                  <div className="flex justify-center mt-8">
                    <p className="text-[#676b5f] text-sm">
                      {"Don't have an account? "}
                      <a
                        href="#"
                        className="undefined text-sm text-[#8129d9] inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline"
                      >
                        Sign up
                      </a>
                    </p>
                  </div>
                  <div className="flex justify-center mt-8">
                    <p className="text-[#676b5f] text-sm">
                      {"You can also "}
                      <a
                        href="#"
                        className="undefined text-sm text-[#8129d9] inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline"
                      >
                        log in with a phone number
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex-[1_1_100%] flex items-end pt-4 pb-1">
                  <p className="text-[#676b5f] text-xs text-center m-auto">
                    This site is protected by reCAPTCHA and the{" "}
                    <a
                      href="#"
                      className="!text-[#676b5f] text-xs text-primary inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline"
                    >
                      Google Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="!text-[#676b5f] text-xs text-primary inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline"
                    >
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden relative -z-10 items-center justify-center overflow-hidden lg:!flex lg:w-[calc(100vw-48%)] bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1705091981580-61fde359c314?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        />
      </div>
    </div>
  );
}

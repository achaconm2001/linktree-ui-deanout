import { Inter, Karla } from "next/font/google"

const karla = Karla({
  subsets: ["latin"]
})
const inter = Inter({
  subsets: ["latin"]
})

export default function Page() {
  return (
    <div className={`min-h-screen w-screen bg-[#012141] overflow-y-auto ${karla.className}`}>
      <div className="fixed inset-x-0 mx-auto my-2 mt-2.5 grid w-full max-w-[788px] grid-cols-3 items-center rounded-full border border-transparent bg-transparent py-2 pl-3 pr-6 transition duration-150 ease-in-out sm:p-3 sm:pt-4">
        <button className="col-start-3 flex size-[40px] cursor-pointer flex-col items-center justify-center justify-self-end rounded-[50%] border border-[#E2E2E2] bg-[#F0F0F0] text-black transition-colors hover:bg-[#EBEBEB] focus:border-[#D2D2D2] focus:outline-none active:bg-[#E2E2E2] active:text-black">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              fill="black"
              stroke="black"
              d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"
            ></path>
            <path
              fill="black"
              stroke="black"
              d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"
            ></path>
            <path
              fill="black"
              stroke="black"
              d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="px-4 pb-8 pt-16">
        <div className="mx-auto max-w-[680px]">
          <div>
            <div className="mb-4">
              <img
                src="https://ugc.production.linktr.ee/c1UL6fTQMuBpciuAbyLJ_Kbp1i1xnuVL1XKTz?io=true&size=avatar-v3_0"
                alt="Profile image"
                className="mx-auto block size-24 rounded-full object-contain"
              />
            </div>
            <div className="mx-3 flex h-[30px] items-center justify-center truncate text-center text-[20px] font-bold leading-6 text-white">
              Dean DeHart
            </div>
            <div className="mt-1 px-10 text-center text-sm font-medium leading-[1.5] text-white sm:text-base">
              Software Product Manager and Content Creator. Check out my courses to learn more
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center">
              <a href="https://www.facebook.com/deaniocom" className="px-2">
                <svg
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="mt-2 size-8 fill-white"
                >
                  <path d="M23,12A11,11,0,1,0,10.279,22.865h0a11.08,11.08,0,0,0,3.436,0h0A10.952,10.952,0,0,0,23,12ZM10.859,21.935v-6.9a.5.5,0,0,0-.5-.5H8.193V12.5h2.166a.5.5,0,0,0,.5-.5V9.686c0-2.278,1.264-3.585,3.459-3.585a15.392,15.392,0,0,1,1.858.137V7.89h-.824l-.019,0a2,2,0,0,0-2.181,1.735,1.8,1.8,0,0,0-.011.4V12a.5.5,0,0,0,.5.5H15.97l-.312,2.035H13.641a.5.5,0,0,0-.5.5v6.9A10.124,10.124,0,0,1,10.859,21.935Zm3.282-.166V15.535h1.946a.5.5,0,0,0,.5-.425l.465-3.035a.5.5,0,0,0-.494-.575H14.141V10.016a1.267,1.267,0,0,1,.308-.821,1.218,1.218,0,0,1,.9-.3h1.324a.5.5,0,0,0,.5-.5V5.806a.5.5,0,0,0-.42-.494A16.661,16.661,0,0,0,14.325,5.1c-2.754,0-4.466,1.757-4.466,4.585V11.5H7.693a.5.5,0,0,0-.5.5v3.035a.5.5,0,0,0,.5.5H9.859v6.234a10,10,0,1,1,4.282,0Z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/deaniocom/" className="px-2">
                <svg
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="mt-2 size-8 fill-white"
                >
                  <path d="M21.938,7.71a7.329,7.329,0,0,0-.456-2.394,4.615,4.615,0,0,0-1.1-1.694,4.61,4.61,0,0,0-1.7-1.1,7.318,7.318,0,0,0-2.393-.456C15.185,2.012,14.817,2,12,2s-3.185.012-4.29.062a7.329,7.329,0,0,0-2.394.456,4.615,4.615,0,0,0-1.694,1.1,4.61,4.61,0,0,0-1.1,1.7A7.318,7.318,0,0,0,2.062,7.71C2.012,8.814,2,9.182,2,12s.012,3.186.062,4.29a7.329,7.329,0,0,0,.456,2.394,4.615,4.615,0,0,0,1.1,1.694,4.61,4.61,0,0,0,1.7,1.1,7.318,7.318,0,0,0,2.393.456c1.1.05,1.472.062,4.29.062s3.186-.012,4.29-.062a7.329,7.329,0,0,0,2.394-.456,4.9,4.9,0,0,0,2.8-2.8,7.318,7.318,0,0,0,.456-2.393c.05-1.1.062-1.472.062-4.29S21.988,8.814,21.938,7.71Zm-1,8.534a6.351,6.351,0,0,1-.388,2.077,3.9,3.9,0,0,1-2.228,2.229,6.363,6.363,0,0,1-2.078.388C15.159,20.988,14.8,21,12,21s-3.159-.012-4.244-.062a6.351,6.351,0,0,1-2.077-.388,3.627,3.627,0,0,1-1.35-.879,3.631,3.631,0,0,1-.879-1.349,6.363,6.363,0,0,1-.388-2.078C3.012,15.159,3,14.8,3,12s.012-3.159.062-4.244A6.351,6.351,0,0,1,3.45,5.679a3.627,3.627,0,0,1,.879-1.35A3.631,3.631,0,0,1,5.678,3.45a6.363,6.363,0,0,1,2.078-.388C8.842,3.012,9.205,3,12,3s3.158.012,4.244.062a6.351,6.351,0,0,1,2.077.388,3.627,3.627,0,0,1,1.35.879,3.631,3.631,0,0,1,.879,1.349,6.363,6.363,0,0,1,.388,2.078C20.988,8.841,21,9.2,21,12S20.988,15.159,20.938,16.244Z"></path>
                  <path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z"></path>
                  <path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z"></path>
                </svg>
              </a>
              <a href="https://tiktok.com/@deaniocom" className="px-2">
                <svg
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="mt-2 size-8 fill-white"
                >
                  <path d="M9.37,23.5a7.468,7.468,0,0,1,0-14.936.537.537,0,0,1,.538.5v3.8a.542.542,0,0,1-.5.5,2.671,2.671,0,1,0,2.645,2.669.432.432,0,0,1,0-.05V1a.5.5,0,0,1,.5-.5h3.787a.5.5,0,0,1,.5.5A4.759,4.759,0,0,0,21.59,5.76a.5.5,0,0,1,.5.5L22.1,10a.533.533,0,0,1-.519.515,9.427,9.427,0,0,1-4.741-1.268v6.789A7.476,7.476,0,0,1,9.37,23.5ZM8.908,9.585a6.466,6.466,0,1,0,6.93,6.447V8.326a.5.5,0,0,1,.791-.407A8.441,8.441,0,0,0,21.1,9.5l-.006-2.76A5.761,5.761,0,0,1,15.859,1.5H13.051V16.032a.458.458,0,0,1,0,.053,3.672,3.672,0,1,1-4.14-3.695Z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/deanin" className="px-2">
                <svg
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="mt-2 size-8 fill-white"
                >
                  <path d="M12,20.55c-.3,0-7.279-.006-9.115-.5A3.375,3.375,0,0,1,.5,17.665,29.809,29.809,0,0,1,0,12,29.824,29.824,0,0,1,.5,6.334,3.375,3.375,0,0,1,2.885,3.948c1.836-.492,8.819-.5,9.115-.5s7.279.006,9.115.5A3.384,3.384,0,0,1,23.5,6.334,29.97,29.97,0,0,1,24,12a29.97,29.97,0,0,1-.5,5.666,3.384,3.384,0,0,1-2.388,2.386C19.279,20.544,12.3,20.55,12,20.55Zm0-16.1c-.072,0-7.146.006-8.857.464A2.377,2.377,0,0,0,1.464,6.593,29.566,29.566,0,0,0,1,12a29.566,29.566,0,0,0,.464,5.407,2.377,2.377,0,0,0,1.679,1.679c1.711.458,8.785.464,8.857.464s7.146-.006,8.857-.464a2.377,2.377,0,0,0,1.679-1.679A29.66,29.66,0,0,0,23,12a29.66,29.66,0,0,0-.464-5.407h0a2.377,2.377,0,0,0-1.679-1.679C19.146,4.456,12.071,4.45,12,4.45ZM9.7,15.95a.5.5,0,0,1-.5-.5V8.55a.5.5,0,0,1,.75-.433l5.975,3.45a.5.5,0,0,1,0,.866L9.95,15.883A.5.5,0,0,1,9.7,15.95Zm.5-6.534v5.168L14.675,12Z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/deaniocom" className="px-2">
                <svg
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="mt-2 size-8 fill-white"
                >
                  <path d="M4.425,1.671A2.738,2.738,0,0,0,1.5,4.4,2.71,2.71,0,0,0,4.369,7.128H4.4a2.734,2.734,0,1,0,.028-5.457ZM4.4,6.128H4.369a1.736,1.736,0,1,1,.056-3.457A1.737,1.737,0,1,1,4.4,6.128Z"></path>
                  <path d="M6.541,8.431H2.253a.5.5,0,0,0-.5.5v12.9a.5.5,0,0,0,.5.5H6.541a.5.5,0,0,0,.5-.5V8.931A.5.5,0,0,0,6.541,8.431Zm-.5,12.9H2.753V9.431H6.041Z"></path>
                  <path d="M17.064,8.128A4.691,4.691,0,0,0,13.7,9.362V8.931a.5.5,0,0,0-.5-.5H8.914a.5.5,0,0,0-.5.523c.053,1.183,0,12.756,0,12.873a.5.5,0,0,0,.5.5H13.2a.5.5,0,0,0,.5-.5v-7.2a2.749,2.749,0,0,1,.1-.86,1.869,1.869,0,0,1,1.737-1.254c.413,0,1.671,0,1.671,2.417v6.9a.5.5,0,0,0,.5.5H22a.5.5,0,0,0,.5-.5v-7.4C22.5,10.485,20.467,8.128,17.064,8.128Zm4.436,13.2H18.213v-6.4c0-2.973-1.673-3.417-2.671-3.417a2.83,2.83,0,0,0-2.664,1.878,3.253,3.253,0,0,0-.177,1.236v6.7H9.416c.009-2.058.04-9.654.009-11.9H12.7v1.328a.5.5,0,0,0,.92.272,3.769,3.769,0,0,1,3.443-1.9c2.819,0,4.436,1.934,4.436,5.305Z"></path>
                </svg>
              </a>
              <a href="https://www.twitch.tv/deanout" className="px-2">
                <svg
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="mt-2 size-8 fill-white"
                >
                  <path d="M7.285,23.5a.493.493,0,0,1-.191-.038A.5.5,0,0,1,6.785,23V19.571H2.572a.5.5,0,0,1-.5-.5V4.929a.5.5,0,0,1,.146-.354L6.147.646A.5.5,0,0,1,6.5.5H21.429a.5.5,0,0,1,.5.5V12a.5.5,0,0,1-.147.354L14.71,19.425a.5.5,0,0,1-.353.146H11.421L7.639,23.354A.5.5,0,0,1,7.285,23.5ZM3.072,18.571H7.285a.5.5,0,0,1,.5.5v2.722l3.076-3.075a.5.5,0,0,1,.353-.147H14.15l6.779-6.778V1.5H6.707L3.072,5.136Z"></path>
                  <path d="M10.822,17.607a.494.494,0,0,1-.192-.038.5.5,0,0,1-.308-.462v-2.25H7.285a.5.5,0,0,1-.5-.5V3.571a.5.5,0,0,1,.5-.5H18.857a.5.5,0,0,1,.5.5v7.643a.5.5,0,0,1-.147.354L16.068,14.71a.5.5,0,0,1-.354.147H13.779l-2.6,2.6A.5.5,0,0,1,10.822,17.607Zm-3.037-3.75h3.037a.5.5,0,0,1,.5.5V15.9l1.9-1.9a.5.5,0,0,1,.354-.146h1.935l2.85-2.85V4.071H7.785Z"></path>
                  <path d="M15.857,10.386a.5.5,0,0,1-.5-.5V6.072a.5.5,0,1,1,1,0V9.886A.5.5,0,0,1,15.857,10.386Z"></path>
                  <path d="M12.357,10.386a.5.5,0,0,1-.5-.5V6.072a.5.5,0,1,1,1,0V9.886A.5.5,0,0,1,12.357,10.386Z"></path>
                </svg>
              </a>
              <a href="https://patreon.com/deanout" className="px-2">
                <svg
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="mt-2 size-8 fill-white"
                >
                  <path d="M15.011,17A7.5,7.5,0,1,1,22.5,9.51,7.509,7.509,0,0,1,15.011,17Zm0-14A6.5,6.5,0,1,0,21.5,9.51,6.518,6.518,0,0,0,15.011,3Z"></path>
                  <path d="M5.5,22H2a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,2,2H5.5a.5.5,0,0,1,.5.5v19A.5.5,0,0,1,5.5,22Zm-3-1H5V3H2.5Z"></path>
                </svg>
              </a>
              <a href="https://amazon.com/shop/deanin" className="px-2">
                <svg
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="mt-2 size-8 fill-white"
                >
                  <path d="M11.058,15.759a2.671,2.671,0,0,0,2.3-1.638,6.812,6.812,0,0,0,.631-3.608l0-.452a.5.5,0,0,0-.5-.5c-3.145,0-4.738,1.2-4.738,3.571A2.349,2.349,0,0,0,11.058,15.759Zm1.934-5.187a5.877,5.877,0,0,1-.5,3.052l0,.008c-.437.79-.864,1.127-1.431,1.127-1.18,0-1.307-1.138-1.307-1.627C9.751,12,10.132,10.7,12.992,10.572Z"></path>
                  <path d="M7.866,8.278a5.565,5.565,0,0,0-3.454,5.316c0,3.132,1.946,5.156,4.959,5.156a6.11,6.11,0,0,0,4.8-1.911,6.349,6.349,0,0,0,1.512,1.655A1.028,1.028,0,0,0,17,18.341c.579-.519,1.657-1.437,2.309-1.986a1.119,1.119,0,0,0,.073-1.4.4.4,0,0,0-.023-.034c-.105-.145-.216-.281-.325-.416a2.642,2.642,0,0,1-.784-1.918V7.813c0-2.028,0-3.944-1.539-5.438A6.945,6.945,0,0,0,12.043.75c-1.858,0-6.27.483-7.118,4.948a1.059,1.059,0,0,0,.9,1.247l2.966.323a1.175,1.175,0,0,0,.955-.983A1.758,1.758,0,0,1,11.64,4.9a1.2,1.2,0,0,1,.9.3,3.175,3.175,0,0,1,.454,2.066l-.381.042A16.647,16.647,0,0,0,7.866,8.278Zm5.68-.069a.5.5,0,0,0,.443-.5V7.52a4.218,4.218,0,0,0-.745-3.028,2.174,2.174,0,0,0-1.6-.591A2.729,2.729,0,0,0,8.763,6.074a.5.5,0,0,1-.081.185l-2.693-.3c-.05-.011-.087-.038-.084-.062.711-3.745,4.529-4.149,6.138-4.149a5.948,5.948,0,0,1,3.969,1.344c1.235,1.2,1.235,2.829,1.235,4.719V12.59a3.623,3.623,0,0,0,1.007,2.547c.094.117.19.235.282.359.049.086.06.153.095.123-.626.525-1.717,1.453-2.3,1.976-.042.037-.083.058-.071.08a5.608,5.608,0,0,1-1.346-1.528l-.252-.37a.5.5,0,0,0-.369-.213.464.464,0,0,0-.4.149A5.379,5.379,0,0,1,9.371,17.75c-2.479,0-3.959-1.554-3.959-4.156A4.547,4.547,0,0,1,8.263,9.2,15.963,15.963,0,0,1,12.714,8.3Z"></path>
                  <path d="M23.794,18.381c-.523-.595-3.211-.788-4.748.31a.5.5,0,1,0,.582.814A4.6,4.6,0,0,1,23,19.02a4.553,4.553,0,0,1-1.331,3.162.5.5,0,1,0,.646.762C23.731,21.742,24.34,19.1,23.794,18.381Z"></path>
                  <path d="M21.859,20.024a.5.5,0,0,0-.678-.2c-.187.1-.374.2-.558.292A18.948,18.948,0,0,1,.816,18.566a.5.5,0,0,0-.634.774,20.327,20.327,0,0,0,11.832,3.892,19.953,19.953,0,0,0,9.059-2.227c.193-.1.388-.2.583-.3A.5.5,0,0,0,21.859,20.024Z"></path>
                </svg>
              </a>
              <a href="mailto:dehartdean@gmail.com" className="px-2">
                <svg
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="mt-2 size-8 fill-white"
                >
                  <path d="M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z"></path>
                  <path d="M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z"></path>
                  <path d="M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z"></path>
                  <path d="M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z"></path>
                </svg>
              </a>
              <a href="https://twitter.com/deaniocom" className="px-2">
                <svg
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="mt-2 size-8 fill-white"
                >
                  <path d="m2.538 3 7.425 9.928L2 21h1.5l7.033-7.067L16 21h5.232l-7.662-9.995 6.955-7.514h-1.5L13 10 7.77 3H2.538Zm1.994 1h2.645l12.087 16h-2.525L4.532 4Z"></path>
                </svg>
              </a>
            </div>
            <div className="mt-8">
              <div className="mb-4">
                <div className="text-center font-bold text-white">Deanin</div>
              </div>
              <div className="mb-4 space-y-4">
                <div className="relative h-[57px] border-2 border-white bg-white text-black shadow sm:h-[60px]">
                  <a
                    href="https://geni.us/deaninCourseComingSoon"
                    className="flex size-full items-center justify-center"
                  >
                    <div className="absolute inset-y-0 left-2 flex items-center justify-center">
                      <img
                        src="https://assets.production.linktr.ee/5d9848f35051d706f64b037d00ac07aaa5264df7/icons/tabler-icons/school.svg"
                        alt=""
                        className="w-8"
                      />
                    </div>
                    <div className="text-center text-sm font-medium leading-[1.5] sm:text-base">
                      Courses
                    </div>
                    <button className="absolute inset-y-0 right-[6px] z-[1] mx-0 my-auto flex size-[40px] items-center justify-center rounded-xl transition hover:bg-black/10 sm:right-[0.5rem] lg:hidden lg:group-hover:flex">
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
                <div className="relative h-[57px] border-2 border-white bg-white text-black shadow sm:h-[60px]">
                  <a
                    href="https://geni.us/deaninCourseComingSoon"
                    className="flex size-full items-center justify-center"
                  >
                    <div className="text-center text-sm font-medium leading-[1.5] sm:text-base">
                      Deanin Store
                    </div>
                    <button className="absolute inset-y-0 right-[6px] z-[1] mx-0 my-auto flex size-[40px] items-center justify-center rounded-xl transition hover:bg-black/10 sm:right-[0.5rem] lg:hidden lg:group-hover:flex">
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
                <div className="relative h-[57px] border-2 border-white bg-white text-black shadow sm:h-[60px]">
                  <a
                    href="https://geni.us/deaninCourseComingSoon"
                    className="flex size-full items-center justify-center"
                  >
                    <div className="absolute inset-y-0 left-2 flex items-center justify-center">
                      <img
                        src="https://assets.production.linktr.ee/5d9848f35051d706f64b037d00ac07aaa5264df7/icons/tabler-icons/brand-youtube.svg"
                        alt=""
                        className="w-8"
                      />
                    </div>
                    <div className="text-center text-sm font-medium leading-[1.5] sm:text-base">
                      Gaming Videos
                    </div>
                    <button className="absolute inset-y-0 right-[6px] z-[1] mx-0 my-auto flex size-[40px] items-center justify-center rounded-xl transition hover:bg-black/10 sm:right-[0.5rem] lg:hidden lg:group-hover:flex">
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
                <div className="relative h-[57px] border-2 border-white bg-white text-black shadow sm:h-[60px]">
                  <a
                    href="https://geni.us/deaninCourseComingSoon"
                    className="flex size-full items-center justify-center"
                  >
                    <div className="absolute inset-y-0 left-2 flex items-center justify-center">
                      <img
                        src="https://assets.production.linktr.ee/5d9848f35051d706f64b037d00ac07aaa5264df7/icons/tabler-icons/news.svg"
                        alt=""
                        className="w-8"
                      />
                    </div>
                    <div className="text-center text-sm font-medium leading-[1.5] sm:text-base">
                      Blog
                    </div>
                    <button className="absolute inset-y-0 right-[6px] z-[1] mx-0 my-auto flex size-[40px] items-center justify-center rounded-xl transition hover:bg-black/10 sm:right-[0.5rem] lg:hidden lg:group-hover:flex">
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
                <div className="relative h-[57px] border-2 border-white bg-white text-black shadow sm:h-[60px]">
                  <a
                    href="https://geni.us/deaninCourseComingSoon"
                    className="flex size-full items-center justify-center"
                  >
                    <div className="absolute inset-y-0 left-2 flex items-center justify-center">
                      <img
                        src="https://assets.production.linktr.ee/5d9848f35051d706f64b037d00ac07aaa5264df7/icons/tabler-icons/brand-discord.svg"
                        alt=""
                        className="w-8"
                      />
                    </div>
                    <div className="text-center text-sm font-medium leading-[1.5] sm:text-base">
                      Discord
                    </div>
                    <button className="absolute inset-y-0 right-[6px] z-[1] mx-0 my-auto flex size-[40px] items-center justify-center rounded-xl transition hover:bg-black/10 sm:right-[0.5rem] lg:hidden lg:group-hover:flex">
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center pt-[57px]">
                <a
                  href="#"
                  className="relative box-content flex h-12 items-center justify-center rounded-[64px] border-[#C0C8D1] bg-[#C0C8D1] px-4 text-black antialiased outline-none transition duration-75 ease-out hover:!bg-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  <svg
                    viewBox="0 0 16 16"
                    enableBackground="new 0 0 24 24"
                    className="mr-2 size-4"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.259 4.87786L14.5965 1.44702L16.5336 3.43084L13.0327 6.76832H17.9573V9.52233H13.0094L16.5336 12.9454L14.5965 14.8903L9.81195 10.0825L5.02745 14.8903L3.09031 12.9532L6.6145 9.53011H1.66663V6.76832H6.59116L3.09031 3.43084L5.02745 1.44702L8.36493 4.87786V0H11.259V4.87786ZM8.36493 13.4666H11.259V20.0016H8.36493V13.4666Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>
                  <span
                  className={`block text-base font-semibold leading-[1.5] tracking-[-.32px] ${inter.className}`}
                    
                  >
                    Create your Linktree
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

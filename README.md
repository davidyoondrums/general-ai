# `General-AI` 🤖💬

Welcome to `General-AI`, FKA `nextjs-chatgpt-app`. 👋🎉
Personal AGI App, powered by `OpenAI GPT-4` and beyond. Designed for smart humans and super-heroes,
this responsive web app comes with Personas, Drawing, Code Execution, PDF imports, Voice support,
data Rendering, AGI functions, chats and more. Show your friends some `#General-AI-energy` 🚀

fork & run on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fenricoros%2FGeneral-AI&env=OPENAI_API_KEY,OPENAI_API_HOST&envDescription=OpenAI%20KEY%20for%20your%20deployment.%20Set%20HOST%20only%20if%20non-default.)

## Useful 👊

![Ask away, paste a ton, copy the gems](docs/pixels/big-AGI-compo1.png)

- Engaging AI Personas
- Clean UX, w/ tokens counters
- Privacy: user-owned API keys and localStorage
- Human I/O: Advanced voice support (TTS, STT)
- Machine I/O: PDF import & Summarization, code execution
- Many more updates & integrations: ElevenLabs, Helicone, Paste.gg, Prodia
- Coming up: automatic-AGI reasoning

<br/>

## Latest Drops 🚀

#### 🚨 April: more #General-AI-energy

- 🎉 **[Google Search](docs/pixels/feature_react_google.png)** active in ReAct - add your keys to Settings > Google Search
- 🎉 **[Reason+Act](docs/pixels/feature_react_turn_on.png)** preview feature - activate with 2-taps on the 'Chat' button
- 🎉 **[Image Generation](docs/pixels/feature_imagine_command.png)** using Prodia (BYO Keys) - /imagine - or menu option
- 🎉 **[Voice Synthesis](docs/pixels/feature_voice_1.png)** 📣 with ElevenLabs, including selection of custom voices
- 🎉 **[Precise Token Counter](docs/pixels/feature_token_counter.png)** 📈 extra-useful to pack the context window
- 🎉 **[Install Mobile APP](docs/pixels/feature_pwa.png)** 📲 looks like native (@harlanlewis)
- 🎉 **[UI language](docs/pixels/feature_language.png)** with auto-detect, and future app language! (@tbodyston)
- 🎉 **PDF Summarization** 🧩🤯 - ask questions to a PDF! (@fredliubojin)
- 🎉 **Code Execution: [Codepen](https://codepen.io/)/[Replit](https://replit.com/)** 💻 (@harlanlewis)
- 🎉 **[SVG Drawing](docs/pixels/feature_svg_drawing.png)** - draw with AI 🎨
- 🎉 Chats: multiple chats, AI titles, Import/Export, Selection mode
- 🎉 Rendering: Markdown, SVG, improved Code blocks
- 🎉 Integrations: OpenAI organization ID
- 🎉 [Cloudflare deployment instructions](docs/deploy-cloudflare.md),
  [awesome-agi](https://github.com/enricoros/awesome-agi)
- 🎉 [Typing Avatars](docs/pixels/gif_typing_040123.gif) ⌨️
  <!-- p><a href="docs/pixels/gif_typing_040123.gif"><img src="docs/pixels/gif_typing_040123.gif" width='700' alt="New Typing Avatars"/></a></p -->

#### March: first release

- 🎉 **[AI Personas](docs/pixels/feature_purpose_two.png)** - including Code, Science, Corporate, and Chat 🎭
- 🎉 **Privacy**: user-owned API keys 🔑 and localStorage 🛡️
- 🎉 **Context** - Attach or [Drag & Drop files](docs/pixels/feature_drop_target.png) to add them to the prompt 📁
- 🎉 **Syntax highlighting** - for multiple languages 🌈
- 🎉 **Code Execution: Sandpack** -
   [now on branch]((https://github.com/enricoros/General-AI/commit/f678a0d463d5e9cf0733f577e11bd612b7902d89)) `variant-code-execution`
- 🎉 Chat with GPT-4 and 3.5 Turbo 🧠💨
- 🎉 Real-time streaming of AI responses ⚡
- 🎉 **Voice Input** 🎙️ - works great on Chrome / Windows
- 🎉 Integration: **[Paste.gg](docs/pixels/feature_paste_gg.png)** integration for chat sharing 📥
- 🎉 Integration: **[Helicone](https://www.helicone.ai/)** integration for API observability 📊
- 🌙 Dark model - Wide mode ⛶

<br/>

## Why this? 💡

Because the official Chat ___lacks important features___, is ___more limited than the api___, at times
___slow or unavailable___, and you cannot deploy it yourself, remix it, add features, or share it with
your friends.
Our users report that ___General-AI is faster___, ___more reliable___, and ___features rich___
with features that matter to them.

![Much features, so fun](docs/pixels/big-AGI-compo2b.png)

## Code 🧩

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=&logo=vercel&logoColor=white)

Clone this repo, install the dependencies, and run the development server:

```bash
git clone https://github.com/davidyoondrums/general-ai.git
cd general-ai
npm install
npm run dev
```

Now the app should be running on `http://localhost:3000`

### Integrations:

* [ElevenLabs](https://elevenlabs.io/) Voice Synthesis (bring your own voice too) - Settings > Text To Speech
* [Helicone](https://www.helicone.ai/) LLM Observability Platform - Settings > Advanced > API Host: 'oai.hconeai.com'
* [Paste.gg](https://paste.gg/) Paste Sharing - Chat Menu > Share via paste.gg
* [Prodia](https://prodia.com/) Image Generation - Settings > Image Generation > Api Key & Model

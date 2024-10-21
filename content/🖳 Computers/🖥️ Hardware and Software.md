# Hardware
#### [LTT PC Building Guide (2024)](https://youtu.be/s1fxZ-VWs2U)
a sort of "choose your own adventure" style mega-video as a PC building guide, use youtube chapters to learn about whatever specific part you're interested in, or just watch the whole thing if you're starting from scratch.
#### [PC Master Race Explained in 9 minutes](https://www.youtube.com/watch?v=RRY1jrIDhvU)
an incredibly entertaining animation styled to look like it was made in flipnote studio, which talks about the pros and cons of buying phones, laptops, gaming laptops, pre-built PCs, and custom-built PCs. Also talks a bit about right to repair. Highly recommend you give this a watch if you're in the market for a new device or care about computers at all.
>[!tip] This video is also available in **[Japanese](https://www.youtube.com/watch?v=AKKBuCinOKM), [Mandarin](https://www.youtube.com/watch?v=-MgOV6BQnl8), [Russian](https://www.youtube.com/watch?v=fFsJU7CKP-I), [Korean](https://www.youtube.com/watch?v=q4heFXEaZ0g)**, and **[Cantonese (incomplete)](https://www.youtube.com/watch?v=8sMxMID96gM)**.
#### [PC Part Picker](https://pcpartpicker.com/)
a site that pulls from a number of part distributors which helps you to create a pc build of parts that are compatible with one another. Compare different parts (both in terms of price and performance), share your hypothetical build for feedback, etc.
# Software
## Programs
#### 🌟 [qBitTorrent](https://www.qbittorrent.org/)
Torrenting client. One of the very few that are worth a damn imo.
#### [NewPipe](https://newpipe.net/)
A FOSS app that lets you watch YouTube on your phone without signing in to Google. It also allows you to download videos, listen to them in the background, skip ads, and skip sponsored segments. Basically everything YouTube Premium offers and more. Also supports bandcamp and soundcloud for music streaming.
#### [ReVanced](https://revanced.app/)
A manager to apply mods to various android apps. Especially useful to remove ads on apps like YouTube. Most people prefer this over NewPipe since it lets you use the actual YouTube app (or any other apps it modifies).
#### [Tartube](https://tartube.sourceforge.io/)
a gui frontend for yt-dlp and others. Basically, it's a video downloader. Never search "youtube mp3 converter" or "youtube downloader" again. Supports more sites than just YouTube. Also downloads mp3s and thumbnails. Be sure to use yt-dlp in tartube
- [youtube-dlp](https://github.com/yt-dlp/yt-dlp) Command line program for downloading vids from youtube and [others](https://ytdl-org.github.io/youtube-dl/supportedsites.html). Use this if you just want the command line utility and dont want the gui that tartube provides. If you dont know what this means, get tartube.
#### [cobalt.tools](https://cobalt.tools)
site that lets you download media from youtube, twitter, twitch, tiktok, reddit, instagram, snapchat, facebook, tumblr, and more and more and more. Just paste the link in and you're off. 
#### [JDownloader](https://jdownloader.org/)
Download manager. Scrape websites, read the clipboard for links to downloads, etc. Have them all in a neat list. Especially useful for archive.org collections or for when you have a slow internet connection.
#### [Handbrake](https://handbrake.fr/)
Video transcoder. Compress, convert, etc. Throw videos in and choose which format you want and watch the file size shrink.
#### [ShareX](https://getsharex.com/)
Best screenshot software there is. Still sad there isn't a linux version.
#### [Open Broadcast Software (OBS)](https://obsproject.com/)
Best video recording, screen recording, and streaming software there is. Pretty self-explanatory.
#### 🌟 [Davincibox](https://github.com/zelikos/davincibox/) ([DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve))
an unofficial DaVinci Resolve Linux installer. DaVinci Resolve is natively supported on linux, but only really for Rocky Linux for some reason. This sets up a distrobox instance that'll have DaVinci running as if it's a native application on any distro!
DaVinci resolve is in my opinion the only video editor that's a viable alternative to adobe premiere for most editing heavy usecases. If you just need to cut a few things many other video editors will be fine, though.
#### 🌟 [Photopea](https://www.photopea.com/)
A free "remake" of Adobe Photoshop in browser. Doesn't upload files to the cloud, and works better than it has any right to. Use [Photopea Adblock](https://greasyfork.org/en/scripts/422431-anti-anti-adblock-on-photopea-com) as well (i had to change the value in the script to 320). uBlock already blocks ads on photopea, but the space is still reserved for the ad. Using this will fill the whole screen and remove the adspace. This is a [userscript](#userscripts).
#### 🌟 [Obsidian.md](https://obsidian.md/)
writing/note taking app that stores all documents you make in human-readable markdown. You can use community plugins (built in plugin store)to store your vault to the cloud. The content of this site is actually written in obsidian and deployed with [Quartz](https://quartz.jzhao.xyz/). [Recommendation video](https://www.youtube.com/watch?v=DbsAQSIKQXk)
#### [Kommiku](https://flathub.org/apps/info.febvre.Komikku)
a nice manga/comic reader i like, made with Adwaita theming for GNOME. Comes with pirate comic/manga repositories built in, somehow. Not to be confused with the android app of the same name, its a different project.
#### [List of Adobe Alternatives](https://twitter.com/XdanielArt/status/1434611199140896772)
Sick list of alternatives to adobe suite software. Useful for linux or if you just hate adobe (But, of course, pirating their software will always be moral :P )

## Web Browsers
Note: I recommend you only use "flagship" or mainline browsers as daily drivers. You need to trust security updates (or updates in general) will be timely, stable, and consistent. The less niche the better. Venture out if you wish, just know the risks. I'd also like to give an anti-recommendation to edge, google chrome, and opera gx. All three are shady as hell (and equivalent to each other in their shittyness, do not fool yourself).
#### 🌟 [Firefox](https://www.mozilla.org/en-US/firefox/new/)
Unlike (virtually) every other browser under the sun, firefox is not chromium based. Supports virtually all standard features you'd expect from a web-browser and a few others. Supports manifest v2 extensions, and even many extensions on its mobile app, too. However, Firefox does not support Progressive Web Apps (PWA). You can use extensions for this, but i feel that defeats the point of using firefox in many regards.
>[!warning]- **Please** [**Harden Firefox and disable bloat**](https://www.privacyguides.org/en/desktop-browsers/#firefox)

>[!tip]- If you want an easier alternative to arkenfox, try [Betterfox](https://github.com/yokoffing/BetterFox)
>its supposedly easier than Arkenfox, but i'm not sure its as legitimate or respected. If you can handle arkenfox, please use it. But betterfox is almost certainly better than using neither.
##### [FirefoxCSS Store](https://firefoxcss-store.github.io/) 
Don't like how firefox looks? Want to theme it to be minimal, look like chrome, opera gx, edge, or any number of other looks? You can use other people's css scripts, or make one yourself if you know or are willing to write some css. You may also want to check out [r/FirefoxCSS](https://www.reddit.com/r/FirefoxCSS) if this seems interesting to you, since the store is just a collection someone curated.
#### 🌟 [Brave Browser](https://brave.com/)
If you want to have a chromium based browser, brave is the only one I can recommend with my chest. Unlike firefox, it's generally privacy respecting out of the box. Comes with Brave Shields, which is a built in ad/tracker blocker, but also supports ublock origin as an alternative, unlike most other chromium browsers.
>[!warning]- **Please** [**Harden brave and disable bloat**](https://www.privacyguides.org/en/desktop-browsers/#brave)
> The Privacy Guides link above will guide you through improving the privacy/security of brave. Additionally, disable "brave rewards" and their other crypto bullshit on install. 


>[!warning]- You will have compromised anonymity when accessing .onion domains
> Brave is not as resistant to fingerprinting as Tor, and far fewer people browse the Tor network with Brave than with Tor, so you will stand out. So please do not use brave to surf Tor if your threat model requires strong anonymity.


>[!info]- Brave supports uBlock Origin, despite being chromium based
>Brave has uBO baked into it, so if you prefer uBO over brave shields, disable brave shields and go to Settings > Extensions > Manifest v2 extensions > Enable uBlock Origin
#### 🌟 [Mullvad Browser](https://mullvad.net/en/browser)
Mullvad browser is a firefox/tor-based browser, and is a collaboration between Mullvad and the Tor Project. Basically, the idea is tor, but instead of using the tor network, it uses a VPN. It does not require you have a subscription to mullvad vpn to use. You probably ought to use the same etiquette as you do with tor. Don't do anything that'd make your browser stand out, sign in to any accounts, etc. But its good if you're just websurfing and aren't, say, logging into your bank or anything that could identify you.
#### [Tor Browser](https://www.torproject.org/download/)
A firefox based browser that helps to anonymize you. Ideally, makes your browser look the same as all other Tor users, which makes it very hard to distinguish between users. Do not modify any defaults. Read about [proper etiquette](https://tb-manual.torproject.org/) or else it'll be useless. Allows you to access .onion domains. Numberphile has a [great video](https://www.youtube.com/watch?v=QRYzre4bf7I) about the technical details of how the tor network helps to keeps you anonymous. Also, it's gonna be slow.
>[!danger]- Do not use Tor with a VPN. Do not daily drive. Do not install any extensions*
> except maybe ublock origin (a common... enough... install to make it okay... probably).

>[!tip]- Tor Project recommends [Onion Browser (iOS)](https://onionbrowser.com/) for surfing Tor on iOS
>Though note apple forces browsers on iOS to use WebKit, which means it's not going to be as private/anonymous as standard Tor.

>[!tip] Check out Tails under Operating Systems below **[[🖥️ Hardware and Software#Desktop Operating Systems|(jump)]]** if you're interested in a private/secure/anonymous temporary operating system
## Search Engines
I recommend just adding all of these engines as [search shortcuts](https://support.mozilla.org/en-US/kb/assign-shortcuts-search-engines) to be honest, though you could always use bangs in ddg/brave/kagi.
#### 🌟 [DuckDuckGo](duckduckgo.com)
My daily driver; usually gets the job done. Search results are sourced bing, but unlike bing it's good about user privacy. Bing results aren't as bad as they're meme'd to be. Also uses [bangs](https://duckduckgo.com/bangs), which lets you search other sites (ex `!w` for wikipedia). Very useful.
#### [Kagi](https://kagi.com/)
is a search engine that is funded by a paid-subscription model. They're good about user privacy. They source their results from a number of other engines, including some indexing they've done themselves. Kagi supports bangs (and lets you add your own), and their results are very high quality. You can have kagi automatically summarize an article, which will have AI give you a tl;dr of it's contents. My favorite feature from kagi are their [lenses](https://www.youtube.com/watch?v=ho9J6OKMxR8), which let you change the "type" of search results you get. Maybe instead of getting listicles, you want actual user discussion. Maybe you're looking for recipes specifically, or you're troubleshooting your code, etc. There's even a "small web" lens, which will highlight indie sites. It also lets you create your own lens, if that's up your alley. You can also promote or demote a site for your future searches, or block them entirely (get fucked fandom). Give their free trial a shot. It's premium quality, but it comes at a premium cost. It's priced at $10/mo (or $108/yr) for unlimited searching. They also offer family plans if you want to try and throw in together with the homies.
#### [Brave Search](https://search.brave.com/)
From the guys that made the web browser. Brave's biggest advantage in addition to being privacy respecting is that they have an independent search index. This means they source their searches themselves, and they dont rely Bing or Google. The results are better than you'd expect them to be. So if you want to resist big tech monopoly, this is probably the engine you want to go to. Also supports bangs, like ddg does.
#### [SearX](https://searx.space/)
SearX is a bit different in that it's open source and decentralized. This means that no one can really own SearX, and everyone knows exactly how it works. kind of like Mastodon if you're familiar with that. Privacy respecting, but you have to trust the host you're using, which can generally be done by making sure they're running vanilla. You could also disable javascript if you want to be extra sure you're searching privately. You can even host it yourself if you want to go the extra mile. It aggregates from a number of other engines and sort of mixes them all together and sorts based on relevance. You can select what search engines it pulls from in it's settings, which will effect response times. Super neat. Oh, and it also has an anonymous page viewer if you want to preview sites without tracking through a proxy. Note that I've linked a SearXNG repo, which is basically SearX with a nicer UI
#### 🌟 [Startpage](https://www.startpage.com/)
Startpage is sort of like ddg, but it indexes from google. So if you want a private google front-end, here's the search engine for you. Also has the anonymous preview feature SearX has.
#### 🌟 [SauceNAO](https://saucenao.com/)
Specifically for reverse image searching, and it's very good. Always my first line of fire. When it fails, there are hotlinks to google and yandex for additional reverse image searching, as well as a few other reverse image search engines. Pairs well with their [Image Search Options](https://saucenao.com/tools/) extension.
#### [Mycroft Project](https://mycroftproject.com/)
Not a search engine, but a tool for adding more secondary "engines". Typing into the omnibar in your browser to do a search shows little buttons at the bottom labeled "search this time with" with icons for various websites. These are called search shortcuts. This feature should be self explanatory, click the wikipedia button, search with wikipedia. If you do this on a website, if they support it, you can add that website's search to that list in your omnibar. Not all sites you can search on have native support for this feature, though. Mycroft allows people to write scripts for websites that dont support this. I use this for SteamGridDB and HowLongToBeat, for example.
- Brave Browser has a feature called "site search" that lets you do something similar, but with a custom browser-level bang instead. If you're on brave, you can access it [here](brave://settings/searchEngines). [here's](https://files.catbox.moe/yseu0s.png) an example i made for the official minecraft wiki, should be easy to figure out how to make your own from there.
## Media Servers
#### [Jellyfin](https://jellyfin.org/)
Basically, host your own damn netflix! Free open source software, lets you stream media from your own server. You can even just give family and friends the website, username, and password, and they can stream your library too. Movies, Tv, Music, as well as a group watch feature which automatically syncs the video between viewers in case you're watching online together and dont want to have to manually sync every time someone wants to pause. Supports [a ton of devices](https://jellyfin.org/clients/).
#### [Plex](https://www.plex.tv)
Similar to jellyfin, but with more bells, whistles, and plug-in support. Unfortunately, not open source, and contains paywalled features. I don't like it as much, but it's valid.
- [dizquetv](https://github.com/vexorian/dizquetv) A plug-in for plex which lets you create a live "TV channel" auto populated from content on your plex server. You could even add TV Bumpers.
- [Retroarcher](https://github.com/RetroArcher) A plug-in for plex which also lets you stream videogames. Under heavy development. I haven't used it myself, but it seems cool.
## Desktop Operating Systems
Note: I recommend you only use "flagship" or mainline distros as daily drivers. You need to trust security updates (or updates in general) will be timely, stable, and consistent. You also need to trust the people actually maintaining your distro. If no one is actually reviewing the code then you have no idea what the system is actually doing. The less niche the better. Venture out if you wish, just know the risks.
**Linux** distros[[?]](https://en.wikipedia.org/wiki/Linux_distribution) are operating systems all based on the same open source, liberated core. No ads, spyware, or bullshit. Companies aren't going to abuse you or hold your system hostage behind spyware or accounts or paywalls. Everyone can see the code, everyone can use it. This results in better usability, privacy, and control for everyone. Yes, open-source software is more secure. Linux can be almost anything you want it to be. It can be easy or hard. It can be simple or complex. It can hold your hand or trust you know what you're doing. It can be immediately functional or customized excruciatingly to your liking. It isn't one thing. It's not obvious how bad windows or even MacOS is until after you've switched. You don't know there's something better until you have it. Even if you "dont want to think about computers", linux is for you in 2024.
#### [But, Linux Is Bad! / OK, Who Is Linux NOT For?](https://rentry.co/95we932b)
A couple short paragraphs I wrote which I wanted to move off of the list to save space. Read it if the title seems relevant to you. (Yes, it is actually not for some people.)
#### [Rufus](https://rufus.ie/en/)
is a program for creating bootable USBs, because windows doesn't have that functionality built in (windows moment). So you'll need it to install linux if you're switching from windows.
- [Etchdroid](https://play.google.com/store/apps/details?id=eu.depau.etchdroid) can be used to create a bootable linux USB instead of rufus if you have an Android phone, but you'll need a way to write to a USB (i used an otg usb adapter, some phones come with one)
#### [Linux Mint](https://linuxmint.com)
a "just werks"/"beginner" linux distro based on ubuntu. Fine for linux newcomers. If you dont know what to pick and dont know what all the jargon means, you can pick this to get started. Good for if you miss Windows 7, since it ships with Cinnamon (though you could also use the Cinnamon Fedora Spin for that). Good for grandmas. Better Than Windows:tm:.
#### 🌟 [Fedora Workstation](https://fedoraproject.org/workstation/)
a great linux distro. This is what I currently daily-drive. Will require a some tinkering on startup, because you'll want those proprietary codecs or whatever. Else, Fedora's intent is to stay up to date without breaking your system, staying up to date is important for desktop in my opinion, and not randomly breaking your system on update is something I prefer. Its an incredibly straightforward distro with a serviceable out of the box experience. Utilitarian.
- [Fedora Workstation Spins](https://fedoraproject.org/spins/) if you dont like GNOME, Fedora has "spins" for other desktop environments such as KDE Plasma, Xfce, Cinnamon, Sway, and more.
#### [OpenSUSE Tumbleweed](https://www.opensuse.org/#Tumbleweed)
is very similar to Fedora in many ways. They reproduce a lot of the same work and use the same package manager as Fedora, but OpenSUSE might be a bit better if you know what you're doing, depending on usecase. Good for power users, sysadmins, etc. The main advantage over Fedora in my opinion is [YaST](https://yast.opensuse.org/), which is a really nice settings suite. It doesn't sound all that hot on paper, but its cool. OpenSUSE is also rolling release like Arch, but they test packages for two weeks before shipping, which means stuff breaks less often.
#### [Arch](https://archlinux.org/)
Arch is cool, if Arch is for you. If you want to use it, you ought to know how to read. You'll have to "know what you're doing". Read the docs. Anyways, Arch is a rolling release distro that ships bleeding edge software, so be prepared for things to break when you're updating. Stuff isn't tested, so you'll have to fix stuff often, but you also get everything before anyone else. Using Arch also gives you access to the Arch User Repository (AUR), which is full of community maintained packages for literally everything you can think of (dont use it if you dont know what you're doing, but you ought to if you're using Arch). Try it if you like control and fixing things. I'd also like to anti-recommend arch-based distros like manjaro or endeavor as well as any install-scripts for your first Arch install. You really should know how the system works to fix problems, and the installation is kind of like a tutorial in a way.
#### [Tails](https://tails.net/)
a portable operating system focused on privacy. Get in, do your business, and get out. Only works by running off of a usb; it's meant to launch on any computer and leave virtually little trace once you shut it down and unplug. Uses the Tor network. Give it to people trying to arrange an out of state abortion, those stuck in domestic abuse situations, journalists, activists, anyone who needs to turn any computer into their private machine for a bit. Not for daily use. If you want something more long term that can be for daily use, look into [Qubes](https://www.qubes-os.org/) (just know you're not exactly going to be gaming on it.)
#### Fuck windows
its dogshit and spyware. You don't know how much better it can be. Regardless, If you MUST use it for whatever reason [Microsoft Activation Scripts](https://github.com/massgravel/Microsoft-Activation-Scripts) may prove useful to you. Microsoft supplies free download links to much of their software (including [Windows 11](https://www.microsoft.com/software-download/windows11)) on their site, so you can just use that then activate with MAS instead of paying.
- [Winaero Tweaker](https://winaerotweaker.com/) if you are going to be using windows, at least use this registry quick-editor to easily customize it to your liking and remove bloatey bullshit you don't need like spyware, ads, cortana. Works for Windows 7 through 11. [Showcase TikTok](https://www.tiktok.com/@positivepressure/video/7407569941836221727)
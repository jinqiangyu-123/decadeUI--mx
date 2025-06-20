"use strict";
decadeModule.import(function (lib, game, ui, get, ai, _status) {
	if (lib.config["extension_十周年UI_translate"]) {
		lib.init.js(lib.assetURL + "extension/十周年UI/js/cardtranslate.js");
		game.saveConfig("enable_drag", false);
	} else {
		game.saveConfig("enable_drag", true);
	}

	//OL随机框 by柳下跖
	if (lib.config.extension_十周年UI_newDecadeStyle && lib.config.extension_十周年UI_newDecadeStyle == "onlineUI") {
		//给龙头添加OL等阶框
		lib.skill._longLevel = {
			trigger: {
				global: "gameStart",
			},
			silent: true,
			forced: true,
			filter: function (event, player) {
				return lib.config.extension_十周年UI_longLevel == "ten" || lib.config.extension_十周年UI_longLevel == "eleven";
			},
			content: function () {
				if (lib.config.extension_十周年UI_longLevel == "ten") {
					var rarity = ["silver", "gold", "yu", "bing", "yan"];
					switch (game.getRarity(player.name)) {
						case "junk":
							rarity = rarity[0];
							break;
						case "common":
							rarity = rarity[1];
							break;
						case "rare":
							rarity = rarity[2];
							break;
						case "epic":
							rarity = rarity[3];
							break;
						case "legend":
							rarity = rarity[4];
							break;
						default:
							break;
					}
				}
				if (lib.config.extension_十周年UI_longLevel == "eleven") {
					var rarity = ["silver", "gold", "yu", "bing", "yan"].randomGet();
				}
				if (rarity === "yan") {
					var longtou = document.createElement("img");
					longtou.src = decadeUIPath + "/assets/image/OL/k2.png";
					longtou.style.cssText = "pointer-events:none";
					longtou.style.position = "absolute";
					longtou.style.display = "block";
					longtou.style.top = "-20.5px";
					longtou.style.right = "-5px";
					longtou.style.height = "115%";
					longtou.style.width = "120%";
					longtou.style.zIndex = "60";
					player.appendChild(longtou);
					var longwei = document.createElement("img");
					longwei.src = decadeUIPath + "/assets/image/OL/border_campOL5.png";
					longwei.style.cssText = "pointer-events:none";
					longwei.style.position = "absolute";
					longwei.style.display = "block";
					longwei.style.top = "-20.5px";
					longwei.style.right = "-5px";
					longwei.style.height = "115%";
					longwei.style.width = "120%";
					longwei.style.zIndex = "72";
					player.appendChild(longwei);
				}
				if (rarity === "bing") {
					var longtou = document.createElement("img");
					longtou.src = decadeUIPath + "/assets/image/OL/k8.png";
					longtou.style.cssText = "pointer-events:none";
					longtou.style.position = "absolute";
					longtou.style.display = "block";
					longtou.style.top = "-6px";
					longtou.style.right = "-5.5px";
					longtou.style.height = "109%";
					longtou.style.width = "113%";
					longtou.style.zIndex = "60";
					player.appendChild(longtou);
					var longwei = document.createElement("img");
					longwei.src = decadeUIPath + "/assets/image/OL/border_campOL4.png";
					longwei.style.cssText = "pointer-events:none";
					longwei.style.position = "absolute";
					longwei.style.display = "block";
					longwei.style.top = "-6px";
					longwei.style.right = "-5.5px";
					longwei.style.height = "107%";
					longwei.style.width = "113%";
					longwei.style.zIndex = "72";
					player.appendChild(longwei);
				}
				if (rarity === "yu") {
					var longtou = document.createElement("img");
					longtou.src = decadeUIPath + "/assets/image/OL/k6.png";
					longtou.style.cssText = "pointer-events:none";
					longtou.style.position = "absolute";
					longtou.style.display = "block";
					longtou.style.top = "-3px";
					longtou.style.right = "-3px";
					longtou.style.height = "107.5%";
					longtou.style.width = "105%";
					longtou.style.zIndex = "60";
					player.appendChild(longtou);
					var longwei = document.createElement("img");
					longwei.src = decadeUIPath + "/assets/image/OL/border_campOL3.png";
					longwei.style.cssText = "pointer-events:none";
					longwei.style.position = "absolute";
					longwei.style.display = "block";
					longwei.style.top = "-3px";
					longwei.style.right = "-3px";
					longwei.style.height = "105.5%";
					longwei.style.width = "104.5%";
					longwei.style.zIndex = "72";
					player.appendChild(longwei);
				}
				if (rarity === "gold") {
					var longtou = document.createElement("img");
					longtou.src = decadeUIPath + "/assets/image/OL/k4.png";
					longtou.style.cssText = "pointer-events:none";
					longtou.style.position = "absolute";
					longtou.style.display = "block";
					longtou.style.top = "-5px";
					longtou.style.right = "-3px";
					longtou.style.height = "107.5%";
					longtou.style.width = "105%";
					longtou.style.zIndex = "60";
					player.appendChild(longtou);
					var longwei = document.createElement("img");
					longwei.src = decadeUIPath + "/assets/image/OL/border_campOL2.png";
					longwei.style.cssText = "pointer-events:none";
					longwei.style.position = "absolute";
					longwei.style.display = "block";
					longwei.style.top = "-5px";
					longwei.style.right = "-3px";
					longwei.style.height = "107.5%";
					longwei.style.width = "104.5%";
					longwei.style.zIndex = "72";
					player.appendChild(longwei);
				}
				if (rarity === "silver") {
					var longtou = document.createElement("img");
					longtou.src = decadeUIPath + "/assets/image/OL/k2.png";
					longtou.style.cssText = "pointer-events:none";
					longtou.style.position = "absolute";
					longtou.style.display = "block";
					longtou.style.top = "-20.5px";
					longtou.style.right = "-5px";
					longtou.style.height = "115%";
					longtou.style.width = "120%";
					longtou.style.zIndex = "60";
					player.appendChild(longtou);
					var longwei = document.createElement("img");
					longwei.src = decadeUIPath + "/assets/image/OL/border_campOL5.png";
					longwei.style.cssText = "pointer-events:none";
					longwei.style.position = "absolute";
					longwei.style.display = "block";
					longwei.style.top = "-20.5px";
					longwei.style.right = "-5px";
					longwei.style.height = "115%";
					longwei.style.width = "120%";
					longwei.style.zIndex = "72";
					player.appendChild(longwei);
				}
			},
		};
	}

	//势力选择
	if (lib.config["extension_十周年UI_shiliyouhua"]) {
		Object.defineProperty(lib, "group", {
			get: () => {
				if (get.mode() === "guozhan") return ["wei", "shu", "wu", "qun", "jin"];
				return ["wei", "shu", "wu", "qun", "jin"];
			},
			set: () => {},
		});
		lib.skill._slyh = {
			trigger: {
				global: "gameStart",
				player: "enterGame",
			},
			forced: true,
			popup: false,
			silent: true,
			priority: Infinity,
			filter: (_, player) => {
				if (get.mode() === "guozhan") return false;
				return player.group && !lib.group.includes(player.group);
			},
			async content(event, trigger, player) {
				const list = lib.group.slice(0, 5);
				const result = await player
					.chooseControl(list)
					.set("ai", () => get.event().controls.randomGet())
					.set("prompt", "请选择你的势力")
					.forResult();
				if (result?.control) {
					player.group = result.control;
					player.node.name.dataset.nature = get.groupnature(result.control);
				}
			},
		};
	}

	//武将背景
	if (lib.config["extension_十周年UI_wujiangbeijing"]) {
		lib.skill._wjBackground = {
			charlotte: true,
			forced: true,
			popup: false,
			trigger: {
				global: ["gameStart", "modeSwitch"],
				player: ["enterGame", "showCharacterEnd"],
			},
			priority: 100,
			content() {
				const setBackground = player => {
					if (!player) return;
					const mode = get.mode();
					const isDoubleCharacter = lib.config.mode_config[mode] && lib.config.mode_config[mode].double_character;
					if (mode === "guozhan" || isDoubleCharacter) {
						player.setAttribute("data-mode", "guozhan");
					} else {
						player.setAttribute("data-mode", "normal");
					}
				};
				game.players.forEach(setBackground);
				game.dead.forEach(setBackground);
			},
		};
		lib.arenaReady.push(function () {
			const mode = get.mode();
			const isDoubleCharacter = lib.config.mode_config[mode] && lib.config.mode_config[mode].double_character;
			if (mode === "guozhan" || isDoubleCharacter) {
				document.body.setAttribute("data-mode", "guozhan");
			} else {
				document.body.setAttribute("data-mode", "normal");
			}
		});
	}

	// 全选按钮功能 by奇妙工具做修改
	lib.hooks.checkBegin.add("Selectall", () => {
		const event = get.event();
		const needMultiSelect = event.selectCard?.[1] > 1 && event.player == game.me;
		const isDiscardPhase = event.name === "phaseDiscard" || event.parent?.name === "phaseDiscard";
		if (needMultiSelect && !ui.Selectall && !isDiscardPhase) {
			ui.Selectall = ui.create.control("全选", () => {
				ai.basic.chooseCard(card => (get.position(card) === "h" ? 114514 : 0));
				event.custom?.add?.card?.();
				ui.selected.cards?.forEach(card => card.updateTransform(true));
			});
		} else if (!needMultiSelect || isDiscardPhase) {
			removeCardQX();
		}
	});
	lib.hooks.uncheckBegin.add("Selectall", () => {
		if (get.event().result?.bool) {
			removeCardQX();
		}
	});
	const removeCardQX = () => {
		if (ui.Selectall) {
			ui.Selectall.remove();
			delete ui.Selectall;
		}
	};

	// 局内交互优化
	if (lib.config["extension_十周年UI_jiaohuyinxiao"]) {
		lib.skill._useCardAudio = {
			trigger: {
				player: "useCard",
			},
			forced: true,
			popup: false,
			priority: -10,
			content() {
				let card = trigger.card;
				let cardType = get.type(card);
				let cardName = get.name(card);
				let cardNature = get.nature(card);
				if (cardType == "basic") {
					switch (cardName) {
						case "sha":
							if (cardNature == "fire") {
								game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							} else if (cardNature == "thunder") {
								game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							} else {
								game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							}
							break;
						case "shan":
							game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							break;
						case "tao":
							game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							break;
						case "jiu":
							game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
							break;
						default:
							game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
					}
				} else if (cardType == "trick") {
					if (get.tag(card, "damage")) {
						game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
					} else if (get.tag(card, "recover")) {
						game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
					} else {
						game.playAudio("..", "extension", "十周年UI", "audio/GameShowCard");
					}
				} else if (cardType == "equip") {
					let equipType = get.subtype(card);
					switch (equipType) {
						case "equip1": // 武器
							game.playAudio("..", "extension", "十周年UI", "audio/weapon_equip");
							break;
						case "equip2": // 防具
							game.playAudio("..", "extension", "十周年UI", "audio/horse_equip");
							break;
						case "equip3": // -1马
							game.playAudio("..", "extension", "十周年UI", "audio/armor_equip");
							break;
						case "equip4": // +1马
							game.playAudio("..", "extension", "十周年UI", "audio/armor_equip");
							break;
						case "equip5": // 宝物
							game.playAudio("..", "extension", "十周年UI", "audio/horse_equip");
							break;
					}
				}
			},
		};
		document.body.addEventListener("mousedown", function (e) {
			const target = e.target;
			if (target.closest("#dui-controls")) {
				if (target.classList.contains("control") || target.parentElement.classList.contains("control")) {
					game.playAudio("..", "extension", "十周年UI", "audio/BtnSure");
				}
			}
			if (target.classList.contains("menubutton") || target.classList.contains("button")) {
				game.playAudio("..", "extension", "十周年UI", "audio/card_click");
			}
			if (target.classList.contains("card")) {
				game.playAudio("..", "extension", "十周年UI", "audio/card_click");
			}
		});
	}

	//手气卡美化
	if (lib.config["extension_十周年UI_shouqikamh"]) {
		lib.element.content.gameDraw = function () {
			"step 0";
			if (_status.brawl && _status.brawl.noGameDraw) {
				event.finish();
				return;
			}
			var end = player;
			var numx = num;
			do {
				if (typeof num == "function") {
					numx = num(player);
				}
				/*otherPile主要是针对那些用专属牌堆，不从一般牌堆摸牌的角色（如陈寿），该属性目前只有两个键值对，且都为函数
				 *getCards函数与获得牌相关，只传入要获得的牌数num作为参数
				 *discard与手气卡换牌后弃置牌相关，只传入要弃置的牌card作为参数
				 */
				const cards = [],
					otherGetCards = event.otherPile?.[player.playerid]?.getCards;
				//先专属牌堆，再一般的牌堆
				if (otherGetCards) cards.addArray(otherGetCards(numx));
				if (player.getTopCards) cards.addArray(player.getTopCards(numx - cards.length));
				cards.addArray(get.cards(numx - cards.length));
				//别问，问就是初始手牌要有标记 by 星の语
				//event.gaintag支持函数、字符串、数组。数组就是添加一连串的标记；函数的返回格式为[[cards1,gaintag1],[cards2,gaintag2]...]
				if (event.gaintag?.[player.playerid]) {
					const gaintag = event.gaintag[player.playerid];
					const list = typeof gaintag == "function" ? gaintag(numx, cards) : [[cards, gaintag]];
					game.broadcastAll(
						(player, list) => {
							for (let i = list.length - 1; i >= 0; i--) {
								player.directgain(list[i][0], null, list[i][1]);
							}
						},
						player,
						list
					);
				} else player.directgain(cards);

				if (player.singleHp === true && get.mode() != "guozhan" && (lib.config.mode != "doudizhu" || _status.mode != "online")) {
					player.doubleDraw();
				}
				player._start_cards = player.getCards("h");
				player = player.next;
			} while (player != end);
			event.changeCard = get.config("change_card");
			if (_status.connectMode || (lib.config.mode == "single" && _status.mode != "wuxianhuoli") || (lib.config.mode == "doudizhu" && _status.mode == "online") || (lib.config.mode != "identity" && lib.config.mode != "guozhan" && lib.config.mode != "doudizhu" && lib.config.mode != "single")) {
				event.changeCard = "disabled";
			}
			"step 1";
			if (event.changeCard != "disabled" && !_status.auto && game.me.countCards("h")) {
				function getRandomInt(min, max) {
					min = Math.ceil(min);
					max = Math.floor(max);
					return Math.floor(Math.random() * (max - min + 1)) + min;
				}
				event.numsl = getRandomInt(10000, 99999);
				event.numsy = 5; //手气卡次数改这里
				var str = "本场还可更换" + event.numsy + "次手牌(剩余" + event.numsl + "张手气卡)";
				event.dialog = ui.create.dialog(str);
				ui.create.confirm("oc");
				event.custom.replace.confirm = function (bool) {
					_status.event.bool = bool;
					game.resume();
				};
			} else {
				event.finish();
			}
			"step 2";
			if (event.changeCard == "once") {
				event.changeCard = "disabled";
			} else if (event.changeCard == "twice") {
				event.changeCard = "once";
			} else if (event.changeCard == "disabled") {
				event.bool = false;
				return;
			}
			_status.imchoosing = true;
			event.switchToAuto = function () {
				_status.event.bool = false;
				game.resume();
			};
			game.pause();
			"step 3";
			_status.imchoosing = false;
			if (event.bool) {
				if (game.changeCoin) {
					game.changeCoin(-3);
				}
				/*otherPile主要是针对那些用专属牌堆，不从一般牌堆摸牌的角色（如陈寿），该属性目前只有两个键值对，且都为函数
				 *getCards函数与获得牌相关，只传入要获得的牌数num作为参数
				 *discard与手气卡换牌后弃置牌相关，只传入要弃置的牌card作为参数
				 */
				const hs = game.me.getCards("h"),
					cards = [],
					otherGetCards = event.otherPile?.[game.me.playerid]?.getCards,
					otherDiscacrd = event.otherPile?.[game.me.playerid]?.discard;
				//先弃牌
				game.addVideo("lose", game.me, [get.cardsInfo(hs), [], [], []]);
				for (let i = 0; i < hs.length; i++) {
					hs[i].removeGaintag(true);
					if (otherDiscacrd) otherDiscacrd(hs[i]);
					else hs[i].discard(false);
				}
				//再摸牌
				if (otherGetCards) cards.addArray(otherGetCards(hs.length));
				//专属牌堆不够时从正常牌堆获取
				cards.addArray(get.cards(hs.length - cards.length));
				//添加标记相关
				//别问，问就是初始手牌要有标记 by 星の语
				//event.gaintag支持函数、字符串、数组。数组就是添加一连串的标记；函数的返回格式为[[cards1,gaintag1],[cards2,gaintag2]...]
				if (event.gaintag?.[game.me.playerid]) {
					const gaintag = event.gaintag[game.me.playerid];
					const list = typeof gaintag == "function" ? gaintag(hs.length, cards) : [[cards, gaintag]];
					for (let i = list.length - 1; i >= 0; i--) {
						game.me.directgain(list[i][0], null, list[i][1]);
					}
				} else game.me.directgain(cards);
				event.numsl--;
				event.numsy--;
				if (event.numsy <= 0) {
					if (event.dialog) event.dialog.close();
					if (ui.confirm) ui.confirm.close();
					game.me._start_cards = game.me.getCards("h");
					event.finish();
				} else {
					var str = "本场还可更换" + event.numsy + "次手牌(剩余" + event.numsl + "张手气卡)";
					event.dialog.remove();
					event.dialog = ui.create.dialog(str);
					event.goto(2);
				}
			} else {
				if (event.dialog) event.dialog.close();
				if (ui.confirm) ui.confirm.close();
				game.me._start_cards = game.me.getCards("h");
				event.finish();
			}
			"step 4";
			setTimeout(decadeUI.effect.gameStart, 51);
		};
	}

	// 卡牌边框
	if (lib.config["extension_十周年UI_cardkmh"] != "off") {
		/**
		 * @param {string} borderImageName - 边框图片名称
		 */
		function applyCardBeautification(borderImageName) {
			if (!borderImageName) {
				console.warn("Card beautification image name not specified");
				return;
			}
			const style = document.createElement("style");
			const borderImageUrl = `${lib.assetURL}extension/十周年UI/assets/image/${borderImageName}.png`;
			const commonBorderStyles = `
				border: 1px solid;
				border-radius: 6px;
				border-image-source: url('${borderImageUrl}');
				border-image-slice: 20 20 20 20;
			`;
			const handCardStyles = `
				.hand-cards > .handcards > .card {
					margin: 0px;
					width: 108px;
					height: 150px;
					position: absolute;
					transition-property: transform, opacity, left, top;
					${commonBorderStyles}
					border-image-width: 20px 20px 20px 20px;
					z-index: 51;
				}
			`;
			const playedCardStyles = `
				#arena > .card,
				#arena.oblongcard:not(.chess) > .card,
				#arena.oblongcard:not(.chess) .handcards > .card {
					width: 108px;
					height: 150px;
					${commonBorderStyles}
					border-image-width: 16px 16px 16px 16px;
				}
			`;

			style.innerHTML = handCardStyles + playedCardStyles;
			document.head.appendChild(style);
		}
		// 初始化卡牌美化
		applyCardBeautification(lib.config.extension_十周年UI_cardkmh);
	}

	//卡牌背景
	if (lib.config.extension_十周年UI_cardbj && lib.config.extension_十周年UI_cardbj != "kb1") {
		var KPcss = document.createElement("style");
		KPcss.innerHTML = ".card:empty,.card.infohidden{background:url('" + lib.assetURL + "extension/十周年UI/assets/image/" + lib.config.extension_十周年UI_cardbj + ".png" + "');background-size:100% 100% !important;}";
		document.head.appendChild(KPcss);
	}

	// 手杀角标
	if (lib.config.extension_十周年UI_newDecadeStyle == "othersOn" || lib.config.extension_十周年UI_newDecadeStyle == "off") {
		const style = document.createElement("style");
		style.innerHTML = `
			.character-prefix-anchor {
				position: absolute;
				right: 0;
				bottom: 0;
				width: 0;
				height: 0;
				pointer-events: none;
			}
			.character-prefix {
				position: absolute !important;
				right: 0px !important;
				bottom: 0px !important;
				font-size: 18px;
				color: #fff;
				text-shadow: 2px 2px 4px #000, 0 0 2px #000, 0 0 1px #000;
				z-index: 999;
				font-weight: bold;
				pointer-events: none;
				font-family: 'yuanli';
			}
		`;
		document.head.appendChild(style);

		// 检测前缀函数
		function getPrefixAuto(nameText) {
			let maxLen = 0;
			let prefix = "";
			for (let key in lib.character) {
				let trans = get.translation(key);
				if (nameText.endsWith(trans) && trans.length > maxLen) {
					maxLen = trans.length;
					prefix = nameText.slice(0, nameText.length - maxLen);
				}
			}
			return prefix;
		}

		// 进游戏时处理一次
		lib.arenaReady.push(function () {
			setTimeout(function () {
				game.players.concat(game.dead).forEach(function (player) {
					if (!player.node || !player.node.name) return;
					let nameNode = player.node.name;
					let prefix = "";
					let trueName = "";

					// 检查是否有带颜色的span前缀
					if (nameNode.childNodes.length > 1 && nameNode.childNodes[0].nodeType === 1 && nameNode.childNodes[0].tagName === "SPAN") {
						let span = nameNode.childNodes[0];
						if (span.style && span.style.color) {
							prefix = span.innerText;
							trueName = "";
							for (let i = 1; i < nameNode.childNodes.length; i++) {
								trueName += nameNode.childNodes[i].textContent;
							}
						}
					}

					// 检查emoji或特殊字符前缀
					if (!prefix && nameNode.childNodes.length > 1 && nameNode.childNodes[0].nodeType === 3) {
						let text = nameNode.childNodes[0].textContent;
						// 检查第一个字符是否为 emoji 或特殊字符（非中英文和数字）
						if (/^[^\u4e00-\u9fa5a-zA-Z0-9]/.test(text)) {
							prefix = text.trim();
							trueName = "";
							for (let i = 1; i < nameNode.childNodes.length; i++) {
								trueName += nameNode.childNodes[i].textContent;
							}
						}
					}

					// 如果没有span或emoji前缀，检查英文前缀
					if (!prefix) {
						let key = player.name;
						let trans = get.translation(key);
						let nameText = nameNode.innerText || nameNode.textContent;
						if (nameText.endsWith(trans) && nameText.length > trans.length) {
							prefix = nameText.slice(0, nameText.length - trans.length);
							trueName = trans;
						}
					}

					let old = player.node.avatar.querySelector(".character-prefix");
					if (old) old.remove();

					let showChar = "";
					let prefixKey = player.name + "_prefix";
					let prefixTrans = get.translation(prefixKey, false);
					if (prefixTrans && prefixTrans !== prefixKey) {
						// 有专门的前缀翻译
						let nameText = get.translation(player.name);
						let trueName = nameText.replace(prefixTrans, "");
						nameNode.innerText = trueName;
						// 判断_prefix是否为英文+中文
						let match = prefixTrans.match(/^([a-zA-Z]+)([\u4e00-\u9fa5]+)/);
						if (match) {
							showChar = match[1]; // 只显示前面的英文部分
						} else if (/^[a-zA-Z]+$/.test(prefixTrans)) {
							showChar = prefixTrans;
						} else {
							showChar = prefixTrans[0];
						}
					} else if (prefix && trueName) {
						// 直接使用前缀的第一个字符
						showChar = prefix[0];
					}

					if (showChar) {
						let prefixDiv = document.createElement("div");
						prefixDiv.className = "character-prefix";
						prefixDiv.innerText = showChar;
						// 适配双将，角标始终在整个头像区域右下角
						let avatarContainer = player.node.avatar.parentNode;
						let anchor = avatarContainer.querySelector(".character-prefix-anchor");
						if (!anchor) {
							anchor = document.createElement("div");
							anchor.className = "character-prefix-anchor";
							avatarContainer.appendChild(anchor);
						}
						anchor.innerHTML = "";
						anchor.appendChild(prefixDiv);
					}
				});
			}, 500);
		});

		// 全局技能
		lib.skill._prefixDetect = {
			trigger: {
				player: ["showCharacterEnd", "enterGame", "changeCharacter", "removeCharacter", "addCharacter"],
				global: "gameStart",
			},
			forced: true,
			popup: false,
			priority: 100,
			content: function () {
				if (!player.node || !player.node.name) return;
				let nameNode = player.node.name;
				let prefix = "";
				let trueName = "";
				if (nameNode.childNodes.length > 1 && nameNode.childNodes[0].nodeType === 1 && nameNode.childNodes[0].tagName === "SPAN") {
					let span = nameNode.childNodes[0];
					if (span.style && span.style.color) {
						prefix = span.innerText;
						trueName = "";
						for (let i = 1; i < nameNode.childNodes.length; i++) {
							trueName += nameNode.childNodes[i].textContent;
						}
					}
				}
				if (!prefix && nameNode.childNodes.length > 1 && nameNode.childNodes[0].nodeType === 3) {
					let text = nameNode.childNodes[0].textContent;
					if (/^[^\u4e00-\u9fa5a-zA-Z0-9]/.test(text)) {
						prefix = text.trim();
						trueName = "";
						for (let i = 1; i < nameNode.childNodes.length; i++) {
							trueName += nameNode.childNodes[i].textContent;
						}
					}
				}
				if (!prefix) {
					let key = player.name;
					let trans = get.translation(key);
					let nameText = nameNode.innerText || nameNode.textContent;
					if (nameText.endsWith(trans) && nameText.length > trans.length) {
						prefix = nameText.slice(0, nameText.length - trans.length);
						trueName = trans;
					}
				}

				let old = player.node.avatar.querySelector(".character-prefix");
				if (old) old.remove();

				let showChar = "";
				let prefixKey = player.name + "_prefix";
				let prefixTrans = get.translation(prefixKey, false);
				if (prefixTrans && prefixTrans !== prefixKey) {
					let nameText = get.translation(player.name);
					let trueName = nameText.replace(prefixTrans, "");
					nameNode.innerText = trueName;
					let match = prefixTrans.match(/^([a-zA-Z]+)([\u4e00-\u9fa5]+)/);
					if (match) {
						showChar = match[1];
					} else if (/^[a-zA-Z]+$/.test(prefixTrans)) {
						showChar = prefixTrans;
					} else {
						showChar = prefixTrans[0];
					}
				} else if (prefix && trueName) {
					showChar = prefix[0];
				}

				if (showChar) {
					let prefixDiv = document.createElement("div");
					prefixDiv.className = "character-prefix";
					prefixDiv.innerText = showChar;
					// 适配双将，角标始终在整个头像区域右下角
					let avatarContainer = player.node.avatar.parentNode;
					let anchor = avatarContainer.querySelector(".character-prefix-anchor");
					if (!anchor) {
						anchor = document.createElement("div");
						anchor.className = "character-prefix-anchor";
						avatarContainer.appendChild(anchor);
					}
					anchor.innerHTML = "";
					anchor.appendChild(prefixDiv);
				}
			},
		};
	}

	window.kpimport = function (func) {
		func(lib, game, ui, get, ai, _status);
	};

	//阶段提示
	if (lib.config.extension_十周年UI_JDTS) {
		//游戏结束消失
		lib.onover.push(function (bool) {
			game.as_removeImage();
		});
		//等待响应
		lib.skill._jd_ddxyA = {
			trigger: {
				player: ["chooseToRespondBegin"],
			},
			silent: true,
			direct: true,
			filter(event, player) {
				return player == game.me && _status.auto == false;
			},
			content() {
				trigger._jd_ddxy = true;
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/ddxy." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], 10);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], 10);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], 10);
				}
			},
		};
		//成为杀的目标开始
		lib.skill._jd_ddxyB = {
			trigger: {
				target: "shaBegin",
			},
			silent: true,
			filter(event, player) {
				return game.me == event.target;
			},
			charlotte: true,
			forced: true,
			content() {
				trigger._jd_ddxy = true;
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/ddxy." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], true);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], true);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
				}
			},
		};
		lib.skill._jd_ddxyC = {
			trigger: {
				player: ["useCardToBegin", "phaseJudge"],
			},
			silent: true,
			filter(event, player) {
				if (event.card.storage && event.card.storage.nowuxie) return false;
				var card = event.card;
				var info = get.info(card);
				if (info.wuxieable === false) return false;
				if (event.name != "phaseJudge") {
					if (event.getParent().nowuxie) return false;
					if (!event.target) {
						if (info.wuxieable) return true;
						return false;
					}
					if (event.player.hasSkillTag("playernowuxie", false, event.card)) return false;
					if (get.type(event.card) != "trick" && !info.wuxieable) return false;
				}
				return player == game.me && _status.auto == false;
			},
			charlotte: true,
			forced: true,
			content() {
				trigger._jd_ddxy = true;
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/ddxy." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], true);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], true);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
				}
			},
		};
		//使用或打出闪后
		lib.skill._jd_shiyongshanD = {
			forced: true,
			charlotte: true,
			trigger: {
				player: ["useCard", "respondAfter"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && event.card.name == "shan";
			},
			content() {
				trigger._jd_ddxy = true;
				game.as_removeImage();
				if (_status.as_showImage_phase) {
					let ext = "jpg";
					if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
					else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
					else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
					let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/" + _status.as_showImage_phase + "." + ext;
					if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
						if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
							game.as_showImage(imgPath, [10, 58, 7, 6], true);
						} else {
							game.as_showImage(imgPath, [3, 58, 7, 6], true);
						}
					} else {
						game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
					}
				}
			},
		};
		//等待响应及游戏结束
		lib.skill._jd_ddxyE = {
			trigger: {
				player: ["chooseToRespondEnd", "useCardToEnd", "phaseJudgeEnd", "respondSha", "shanBegin"],
			},
			silent: true,
			filter(event, player) {
				if (!event._jd_ddxy) return false;
				return player == game.me && _status.auto == false;
			},
			direct: true,
			content() {
				game.as_removeImage();
				if (_status.as_showImage_phase) {
					let ext = "jpg";
					if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
					else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
					else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
					let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/" + _status.as_showImage_phase + "." + ext;
					if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
						if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
							game.as_showImage(imgPath, [10, 58, 7, 6], true);
						} else {
							game.as_showImage(imgPath, [3, 58, 7, 6], true);
						}
					} else {
						game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
					}
				}
			},
		};
		//对方正在思考
		lib.skill._jd_dfsk = {
			trigger: {
				global: ["phaseBegin", "phaseEnd", "phaseJudgeBegin", "phaseDrawBegin", "phaseUseBegin", "phaseDiscardBegin"],
			},
			silent: true,
			charlotte: true,
			forced: true,
			filter(event, player) {
				//剩余人数两人时
				if (game.players.length == 2 && _status.currentPhase != game.me) return true;
			},
			content() {
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/dfsk." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], true);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], true);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
				}
			},
		};
		//死亡或回合结束消失
		lib.skill._jd_wjsw = {
			trigger: {
				global: ["phaseEnd", "useCardAfter"],
			},
			silent: true,
			filter(event, player) {
				return _status.currentPhase != game.me && player != game.me;
			},
			forced: true,
			charlotte: true,
			content() {
				game.as_removeImage();
			},
		};
		lib.skill._jd_swxs = {
			trigger: {
				global: ["dieAfter"],
			},
			silent: true,
			forced: true,
			charlotte: true,
			filter(event, player) {
				return player == game.me && _status.auto == false;
			},
			content() {
				game.as_removeImage();
			},
		};
		//回合开始
		lib.skill._jd_hhks = {
			trigger: {
				player: ["phaseBegin"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: Infinity,
			firstDo: true,
			content() {
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/hhks." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], true);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], true);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
				}
				_status.as_showImage_phase = "hhks";
			},
		};
		//准备阶段
		lib.skill._jd_zbjdb = {
			trigger: {
				player: ["phaseZhunbeiBefore"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: Infinity,
			firstDo: true,
			content() {
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/pdjd." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], true);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], true);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
				}
				_status.as_showImage_phase = "zbjd";
			},
		};
		lib.skill._jd_zbjde = {
			trigger: {
				player: ["phaseZhunbeiAfter"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: -Infinity,
			lastDo: true,
			content() {
				if (_status.as_showImage_phase && _status.as_showImage_phase == "zbjd") {
					game.as_removeImage();
					delete _status.as_showImage_phase;
				}
			},
		};
		//判定阶段
		lib.skill._jd_pdjdb = {
			trigger: {
				player: ["phaseJudgeBefore"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: Infinity,
			firstDo: true,
			content() {
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/pdjd." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], true);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], true);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
				}
				_status.as_showImage_phase = "pdjd";
			},
		};
		lib.skill._jd_pdjde = {
			trigger: {
				player: ["phaseJudgeAfter"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: -Infinity,
			lastDo: true,
			content() {
				if (_status.as_showImage_phase && _status.as_showImage_phase == "pdjd") {
					game.as_removeImage();
					delete _status.as_showImage_phase;
				}
			},
		};
		//摸牌阶段
		lib.skill._jd_mpjdb = {
			trigger: {
				player: ["phaseDrawBefore"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: Infinity,
			firstDo: true,
			content() {
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/mpjd." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], true);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], true);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
				}
				_status.as_showImage_phase = "mpjd";
			},
		};
		lib.skill._jd_mpjde = {
			trigger: {
				player: ["phaseDrawAfter"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: -Infinity,
			lastDo: true,
			content() {
				if (_status.as_showImage_phase && _status.as_showImage_phase == "mpjd") {
					game.as_removeImage();
					delete _status.as_showImage_phase;
				}
			},
		};
		//出牌阶段
		lib.skill._jd_cpjdb = {
			trigger: {
				player: ["phaseUseBefore"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: Infinity,
			firstDo: true,
			content() {
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/cpjd." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], true);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], true);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
				}
				_status.as_showImage_phase = "cpjd";
			},
		};
		lib.skill._jd_cpjde = {
			trigger: {
				player: ["phaseUseAfter"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: -Infinity,
			lastDo: true,
			content() {
				if (_status.as_showImage_phase && _status.as_showImage_phase == "cpjd") {
					game.as_removeImage();
					delete _status.as_showImage_phase;
				}
			},
		};
		//弃牌阶段
		lib.skill._jd_qpjdb = {
			trigger: {
				player: ["phaseDiscardBefore"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: Infinity,
			firstDo: true,
			content() {
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/qpjd." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], true);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], true);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
				}
				_status.as_showImage_phase = "qpjd";
			},
		};
		lib.skill._jd_qpjde = {
			trigger: {
				player: ["phaseDiscardAfter"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: -Infinity,
			lastDo: true,
			content() {
				if (_status.as_showImage_phase && _status.as_showImage_phase == "qpjd") {
					game.as_removeImage();
					delete _status.as_showImage_phase;
				}
			},
		};
		//结束阶段
		lib.skill._jd_jsjdb = {
			trigger: {
				player: ["phaseJieshuBefore"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: Infinity,
			firstDo: true,
			content() {
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/pdjd." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], true);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], true);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
				}
				_status.as_showImage_phase = "jsjd";
			},
		};
		lib.skill._jd_jsjde = {
			trigger: {
				player: ["phaseJieshuAfter"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: -Infinity,
			lastDo: true,
			content() {
				if (_status.as_showImage_phase && _status.as_showImage_phase == "jsjd") {
					game.as_removeImage();
					delete _status.as_showImage_phase;
				}
			},
		};
		//回合结束
		lib.skill._jd_hhjsb = {
			trigger: {
				player: ["phaseEnd"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: Infinity,
			firstDo: true,
			content() {
				let ext = "jpg";
				if (lib.config.extension_十周年UI_JDTSYangshi == "2") ext = "png";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "3") ext = "webp";
				else if (lib.config.extension_十周年UI_JDTSYangshi == "4") ext = "jpeg";
				let imgPath = "extension/十周年UI/shoushaUI/lbtn/images/JDTS/hhjs." + ext;
				if (lib.config.extension_十周年UI_JDTSYangshi == "1") {
					if (get.mode() == "taixuhuanjing" || lib.config["extension_EngEX_SSServant"]) {
						game.as_showImage(imgPath, [10, 58, 7, 6], true);
					} else {
						game.as_showImage(imgPath, [3, 58, 7, 6], true);
					}
				} else {
					game.as_showImage(imgPath, [18, 65, 8, 4.4], true);
				}
				_status.as_showImage_phase = "hhjs";
			},
		};
		lib.skill._jd_hhjse = {
			trigger: {
				player: ["phaseAfter"],
			},
			silent: true,
			filter(event, player) {
				return player == game.me && _status.currentPhase == player;
			},
			charlotte: true,
			ruleSkill: true,
			direct: true,
			priority: -Infinity,
			lastDo: true,
			content() {
				if (_status.as_showImage_phase && _status.as_showImage_phase == "hhjs") {
					game.as_removeImage();
					delete _status.as_showImage_phase;
				}
			},
		};
	}

	// 伤害恢复优化
	if (lib.config.extension_十周年UI_newDecadeStyle === "othersOff" || lib.config.extension_十周年UI_newDecadeStyle === "on") {
		window._WJMHHUIFUSHUZITEXIAO = {
			shuzi2: {
				name: "../../../十周年UI/assets/animation/globaltexiao/huifushuzi/shuzi2",
			},
		};
		window._WJMHXUNISHUZITEXIAO = {
			SS_PaiJu_xunishanghai: {
				name: "../../../十周年UI/assets/animation/globaltexiao/xunishuzi/SS_PaiJu_xunishanghai",
			},
		};
		window._WJMHSHANGHAISHUZITEXIAO = {
			SZN_shuzi: {
				name: "../../../十周年UI/assets/animation/globaltexiao/shanghaishuzi/SZN_shuzi",
			},
		};
		lib.skill._wjmh_huifushuzi_ = {
			priority: 10,
			forced: true,
			trigger: {
				player: "recoverBegin",
			},
			filter(event, player) {
				return event.num && event.num > 0 && event.num <= 9;
			},
			content() {
				var action = trigger.num.toString();
				if (action) {
					dcdAnim.loadSpine(window._WJMHHUIFUSHUZITEXIAO.shuzi2.name, "skel", function () {
						window._WJMHHUIFUSHUZITEXIAO.shuzi2.action = action;
						dcdAnim.playSpine(window._WJMHHUIFUSHUZITEXIAO.shuzi2, {
							speed: 0.6,
							scale: 0.5,
							parent: player,
						});
					});
				}
			},
		};
		lib.skill._wjmh_xunishuzi_ = {
			priority: 10,
			forced: true,
			trigger: {
				player: "damage",
			},
			filter(event, player) {
				if ((event.num != 0 && !event.num) || (event.num < 0 && event.num > 9)) return false;
				return event.unreal; // 判断是否是虚拟伤害
			},
			content() {
				var action = "play" + trigger.num.toString();
				if (action) {
					dcdAnim.loadSpine(window._WJMHXUNISHUZITEXIAO.SS_PaiJu_xunishanghai.name, "skel", function () {
						window._WJMHXUNISHUZITEXIAO.SS_PaiJu_xunishanghai.action = action;
						dcdAnim.playSpine(window._WJMHXUNISHUZITEXIAO.SS_PaiJu_xunishanghai, {
							speed: 0.6,
							scale: 0.5,
							parent: player,
						});
					});
				}
			},
		};
		lib.skill._wjmh_shanghaishuzi_ = {
			priority: 210,
			forced: true,
			trigger: {
				player: "damageBegin4",
			},
			filter(event, player) {
				return event.num && event.num > 1 && event.num <= 9;
			},
			content() {
				var action = trigger.num.toString();
				if (action) {
					dcdAnim.loadSpine(window._WJMHSHANGHAISHUZITEXIAO.SZN_shuzi.name, "skel", function () {
						window._WJMHSHANGHAISHUZITEXIAO.SZN_shuzi.action = action;
						dcdAnim.playSpine(window._WJMHSHANGHAISHUZITEXIAO.SZN_shuzi, {
							speed: 0.6,
							scale: 0.5,
							parent: player,
						});
					});
				}
			},
		};
	}

	//目标指示特效
	lib.element.player.inits = [].concat(lib.element.player.inits || []).concat(player => {
		if (player.ChupaizhishiXObserver) return;
		const ChupaizhishiX = {
			attributes: true,
			attributeFilter: ["class"],
		};
		let timer = null;
		const animations = {
			jiangjun: "SF_xuanzhong_eff_jiangjun",
			weijiangjun: "SF_xuanzhong_eff_weijiangjun",
			cheqijiangjun: "SF_xuanzhong_eff_cheqijiangjun",
			biaoqijiangjun: "SF_xuanzhong_eff_biaoqijiangjun",
			dajiangjun: "SF_xuanzhong_eff_dajiangjun",
			dasima: "SF_xuanzhong_eff_dasima",
			shoushaX: "aar_chupaizhishiX",
			shousha: "aar_chupaizhishi",
		};
		const ChupaizhishiXObserver = new globalThis.MutationObserver(mutationRecords => {
			for (let mutationRecord of mutationRecords) {
				if (mutationRecord.attributeName !== "class") continue;
				const targetElement = mutationRecord.target;

				if (targetElement.classList.contains("selectable")) {
					if (!targetElement.ChupaizhishiXid) {
						if (!window.chupaiload) {
							window.chupaiload = true;
						}
						if (timer) return;

						timer = setTimeout(() => {
							const config = decadeUI.config.chupaizhishi;
							if (config !== "off" && animations[config]) {
								targetElement.ChupaizhishiXid = dcdAnim.playSpine(
									{
										name: animations[config],
										loop: true,
									},
									{
										parent: targetElement,
										scale: config === "biaoqijiangjun" ? 0.5 : 0.6,
									}
								);
							}
							timer = null;
						}, 300);
					}
				} else {
					if (targetElement.ChupaizhishiXid) {
						dcdAnim.stopSpine(targetElement.ChupaizhishiXid);
						delete targetElement.ChupaizhishiXid;
						if (timer) {
							clearTimeout(timer);
							timer = null;
						}
					}
				}
			}
		});
		ChupaizhishiXObserver.observe(player, ChupaizhishiX);
		player.ChupaizhishiXObserver = ChupaizhishiXObserver;
	});
});

const skill_descriptions = {
    Brimstone:{
        Q:{
            title:"Q - 灼人燃彈",
            descript:"◆ 裝備一個燃燒榴彈發射器。點擊「攻擊鍵」，即可發射一個燃燒彈，在地面停止滾動後爆炸，製造一個持續燃燒的區域，對其中玩家造成傷害。"
        },
        E:{
            title:"E - 垂天煙幕",
            descript:"◆ 裝備一個戰略地圖。點擊「攻擊鍵」，可指定煙幕發射的地點。點擊「輔助攻擊鍵」進行確認，在指定區域發射一大片煙幕，可阻擋視野且久不退散。"
        },
        C:{
            title:"C - 激勵信號",
            descript:"◆ 裝備一個激勵信號。點擊「攻擊鍵」，可將激勵信號拋到布史東面前。觸地時會製造一個力場，賦予範圍內的玩家「快射」的增益效果。"
        },
        X:{
            title:"X - 衛星空襲",
            descript:"◆ 裝備一個戰略地圖。點擊「攻擊鍵」，即可向指定地點發射衛星空襲雷射，對範圍內的玩家造成重度持續傷害。"
        },
    },
    Phoenix:{
        Q:{
            title:"Q - 閃光曲球",
            descript:"◆ 裝備一個可轉彎的閃光能量球，投擲出去短暫滯空後爆炸。點擊「攻擊鍵」，可讓能量球向左轉，爆炸後產生的閃光可以致盲所有未移開視線的玩家。點擊「輔助攻擊鍵」則可讓能量球向右轉。"
        },
        E:{
            title:"E - 赤手烈焰",
            descript:"◆ 裝備一個火球。點擊「攻擊鍵」可丟出，在觸地或者經過固定時間後，將製造出一持續燃燒的區域，對敵軍造成傷害。"
        },
        C:{
            title:"C - 燃焰之牆",
            descript:"◆ 裝備一堵火焰牆。點擊「攻擊鍵」，即可召喚一排向前推進的火焰，形成一面阻擋視野的火牆，對逕行穿越的玩家造成傷害。"
        },
        X:{
            title:"X - 再來一局",
            descript:"◆ 立刻標記菲尼克斯的目前位置。此技能啟用時，不論陣亡或技能倒數完畢，皆能使菲尼克斯在指定位置滿血復活。"
        },
    },
    Sage:{
        Q:{
            title:"Q - 緩速靈球",
            descript:"◆ 裝備一顆緩速靈球。點擊「攻擊鍵」，將緩速靈球往前丟，觸地時立即引爆，製造一個持續力場，使範圍內的玩家緩速。"
        },
        E:{
            title:"E - 治癒靈球",
            descript:"◆ 裝備一顆治癒靈球。以十字準星瞄準負傷友軍，點擊「攻擊鍵」，發射治癒靈球，就能對其產生持續治療效果。當聖祈負傷時，點擊「輔助攻擊鍵」，就能對自身發動持續治療效果。"
        },
        C:{
            title:"C - 屏障靈球",
            descript:"◆ 裝備一顆屏障靈球。點擊「攻擊鍵」，可放置一面堅實牆壁。點擊「輔助攻擊鍵」，則可旋轉角色方向。"
        },
        X:{
            title:"X - 起死回生",
            descript:"◆ 裝備一項復活技能。以十字準星瞄準陣亡友軍，點擊「攻擊鍵」，就能使其復活。短暫詠唱後，友軍即可滿血復活。"
        },
    },
    Sova:{
        Q:{
            title:"Q - 震波箭",
            descript:"◆ 裝備一把弓，配有震波箭。點擊「攻擊鍵」即可向前射出這隻爆破箭，觸物後的爆炸將傷害附近玩家。長按「攻擊鍵」，可增加射程。點擊「輔助攻擊鍵」，可使箭矢彈射最多兩次。"
        },
        E:{
            title:"E - 偵察箭",
            descript:"◆ 裝備一把弓，配有偵察箭。點擊「攻擊鍵」，即可向前射出偵察箭，觸物後將直接啟動，處於偵測範圍內的敵軍將被揭露行蹤。長按「攻擊鍵」，可增加射程。點擊「輔助攻擊鍵」，可使箭矢彈射最多兩次。"
        },
        C:{
            title:"C - 夜梟無人機",
            descript:"◆ 裝備一台夜梟無人機。點擊「攻擊鍵」，即可讓無人機升空並開始遙控。飛行時按下「攻擊鍵」，可發射記號飛鏢，被射中的玩家將被揭露行蹤。"
        },
        X:{
            title:"X - 獵者之怒",
            descript:"◆ 裝備一把弓，配有三發可穿牆的遠距離爆擊光束。點擊「攻擊鍵」，即可在蘇法身前發射一直線的爆擊光束，對擊中的敵軍造成傷害並揭露其行蹤。技能啟用期間，還能再「重新施放」最多兩次。"
        },
    },
    Viper:{
        Q:{
            title:"Q - 腐蝕毒霧",
            descript:"◆ 裝備一個瓦斯彈罐。點擊「攻擊鍵」即可丟出，該回合中此彈罐不會消失。「重施技能」可以製造一片毒霧雲，須消耗自身的燃料存量。此技能可以多次「重新施放」，且可撿起瓦斯彈罐再「重新投擲」。"
        },
        E:{
            title:"E - 毒雲瘴壁",
            descript:"◆ 裝備一個瓦斯彈罐。點擊「攻擊鍵」，即可部署一直線的瓦斯彈罐。「重施技能」可以製造一道高聳的毒瘴壁，須消耗自身的燃料存量。此技能可多次「重新施放」。"
        },
        C:{
            title:"C - 蛇咬毒液",
            descript:"◆ 裝備一個化武發射器。點擊「攻擊鍵」，即可發射一個化武罐，觸地後立刻碎裂，製造一個被化學物質汙染的區域，在該地持續發揮毒性，可傷害及緩速敵軍。"
        },
        X:{
            title:"X - 蝮蛇領域",
            descript:"◆ 裝備一個化武噴霧器。按下「攻擊鍵」，即可在薇蝮身周噴出霧狀化武，製造一片大型毒霧雲，可削弱敵人視野，並減少範圍內玩家的最大生命值。"
        },
    },
    Cypher:{
        Q:{
            title:"Q - 網戰牢籠",
            descript:"◆ 立刻將網戰牢籠拋到瑟符面前。按下「啟動」，可製造出一個使敵軍緩速的區域，同時能阻擋視野。"
        },
        E:{
            title:"E - 監控攝影機",
            descript:"◆ 裝備一個監控攝影機。點擊「攻擊鍵」，即可將攝影機安裝至指定地點。「重施技能」即可讓無人機升空並開始遙控。遙控攝影機時，點擊「攻擊鍵」可射出記號飛鏢，被射中的玩家將被揭露行蹤。"
        },
        C:{
            title:"C - 陷阱絆索",
            descript:"◆ 裝備一條陷阱絆索。點擊「攻擊鍵」，即可在指定地點放置隱形絆索，在該位置與對向牆壁之間拉出一條線。觸發絆索的敵軍若未及時摧毀該裝置，經過一小段時間後，將被限制行動、揭露行蹤，且頭暈目眩。絆索可被撿起，然後「重新部署」。"
        },
        X:{
            title:"X - 神經駭客",
            descript:"◆ 立刻對十字準星所瞄準的一具敵軍遺體使用此技能，可揭露所有尚存敵軍的行蹤。"
        },
    },
    Reyna:{
        Q:{
            title:"Q - 生靈吞噬",
            descript:"◆ 被蕾娜擊殺的敵人會留下一個維持3秒鐘的魂體。立即消耗一個附近的魂體，在一小段時間內快速回復生命。超過100生命值的恢復量會隨時間流失。若已在女皇狀態下，此技能會自動施放並且不消耗魂體。"
        },
        E:{
            title:"E - 銷魂解形",
            descript:"◆ 立即消耗一個附近的魂體，並使自己短時間內進入無形狀態。若已在無上女皇狀態下，則同時變得隱形。"
        },
        C:{
            title:"C - 邪媚凝視",
            descript:"◆ 裝備一個可破壞的以太之眼。按下「啟動」，可朝前方短距離丟出以太之眼。看見此眼的敵軍視野會受到限制。"
        },
        X:{
            title:"X - 無上女皇",
            descript:"◆ 立即進入狂暴模式，大幅提升射擊、裝備及填彈速度。擊殺會刷新此增益效果的持續時間。"
        },
    },
    Killjoy:{
        Q:{
            title:"Q - 電偵追擊號",
            descript:"◆ 裝備一個隱形的警報機器人。點擊「攻擊鍵」，即可部署一個會自動追擊範圍內敵人的機器人，追到目標後機器人會引爆造成傷害，並同時暴露其弱點。長按「裝備鍵」，即可召回已部署的機器人。"
        },
        E:{
            title:"E - 重火力砲塔",
            descript:"◆ 裝備一個砲塔。點擊「攻擊鍵」，即可部署該砲台，對半圓形範圍內的敵人開火。長按「裝備鍵」，即可召回已部署的砲塔。"
        },
        C:{
            title:"C - 奈米機器蟲",
            descript:"◆ 裝備一個奈米機器蟲手榴彈。點擊「攻擊鍵」，即可拋出手榴彈，奈米機器蟲會在著地之後進入隱形狀態，按下「啟動鍵」，即可部署一群會造成敵人傷害的奈米機器蟲。"
        },
        X:{
            title:"X - 全面封鎖",
            descript:"◆ 裝備一個封鎖裝置。點擊「攻擊鍵」，即可部署該裝置，在長時間暖機之後，裝置會拘束所有半徑範圍內的敵人。敵人可以摧毀此裝置。"
        },
    },
    Breach:{
        Q:{
            title:"Q - 致盲閃光",
            descript:"◆ 裝備一顆致盲彈。點擊「攻擊鍵」發射彈體，穿牆後在另一面快速爆炸。爆炸後將致盲所有未移開視線的玩家。"
        },
        E:{
            title:"E - 震動斷層",
            descript:"◆ 裝備一個撼地雷射。長按「攻擊鍵」，可增加攻擊距離。放開「攻擊鍵」，將引發地震，使範圍內以及發射路徑上的所有玩家暈眩。"
        },
        C:{
            title:"C - 餘震打擊",
            descript:"◆ 裝備一個核融彈。點擊「攻擊鍵」發射彈體，穿牆後在另一面緩速爆炸。在範圍內的所有人將受到重度傷害。"
        },
        X:{
            title:"X - 撼地轟雷",
            descript:"◆ 裝備一顆撼地彈。點擊「攻擊鍵」，呈大型錐狀在所有地形上釋放連鎖地震。範圍內的所有人將受到暈眩且遭到擊飛。"
        },
    },
    Omen:{
        Q:{
            title:"Q - 夢魘侵襲",
            descript:"◆ 立刻向前射出一發暗影彈，被觸及所有玩家視野範圍將暫時縮小。此彈體可貫穿牆壁。"
        },
        E:{
            title:"E - 黑影籠罩",
            descript:"◆ 裝備一顆暗影球，可預視其拋射距離。點擊「攻擊鍵」，將暗影球丟至標記地點，製造出一個暗影穹頂，可阻擋視野且久不退散。瞄準時，長按「輔助攻擊鍵」，可將標記移動至遠處。瞄準時，長按「技能鍵」，則能將標記移動至近處。"
        },
        C:{
            title:"C - 瞬步鬼影",
            descript:"◆ 裝備一項「瞬步鬼影」技能，可預視其傳送距離。點擊「攻擊鍵」即開始詠唱，隨後可傳送至標記地點。"
        },
        X:{
            title:"X - 闇夜襲擊",
            descript:"◆ 裝備一個戰略地圖。點擊「攻擊鍵」，即可傳送至指定地點。詠唱技能時，歐門會以「暗影型態」在指定地點浮現，附近敵軍可將其摧毀來中止傳送。"
        },
    },
    Jett:{
        Q:{
            title:"Q - 乘風飛躍",
            descript:"◆ 立刻讓婕提朝高空中風湧躍起。"
        },
        E:{
            title:"E - 順風式",
            descript:"◆ 按下「啟動鍵」可暫時準備一陣強風，「重施技能」可讓婕提朝移動的方向快速衝刺；若婕提立定不動，則會向前衝刺。"
        },
        C:{
            title:"C - 穿雲衝刺",
            descript:"◆ 立刻丟出一枚彈體，觸物時會擴散成一朵雲霧，可暫時阻擋視野。長按「技能鍵」能讓雲霧轉彎，使其移動至十字準星所指的方向。"
        },
        X:{
            title:"X - 暴風旋刃",
            descript:"◆ 裝備一組高準度的飛刀，擊殺一名敵軍即可重填。點擊「輔助攻擊鍵」，則可向目標丟出剩下的所有飛刀。"
        },
    },
    Raze:{
        Q:{
            title:"Q - 爆破包",
            descript:"◆ 立即丟出一個會黏在表面的爆破包。部署完成後「重施技能」來引爆，對擊中的東西造成位移及傷害。芮茲並不會受此技能波及而受到傷害，但她若被炸到高空，則會受到落地傷害。"
        },
        E:{
            title:"E - 漆彩榴彈",
            descript:"◆ 裝備一個破片手榴彈。點擊「攻擊鍵」來丟出手榴彈造成傷害，並且射出對範圍內所有目標造成傷害的破片。"
        },
        C:{
            title:"C - 爆破機器人",
            descript:"◆ 裝備一個爆破機器人。點擊「攻擊鍵」來啟動機器人，機器人會在地面沿著直線行進，撞到牆壁會反彈。爆破機器人會鎖定出現在其前方扇形區域的敵人，並朝目標直衝，若成功追上敵人則會爆炸造成大量傷害。"
        },
        X:{
            title:"X - 掃興火炮",
            descript:"◆ 裝備一個火箭發射器。點擊「攻擊鍵」發射一枚火箭炮，火箭炮會在擊中區域造成大範圍傷害。"
        },
    },
    Skye:{
        Q:{
            title:"Q - 開路狼鋒",
            descript:"◆ 裝備一個袋狼雕飾。點擊「攻擊鍵」，即可放出猛獸並控制其行動。控制時，點擊「攻擊鍵」可命令其朝前方撲擊，炸出震波暈眩並傷害直接命中的敵軍。"
        },
        E:{
            title:"E - 引導之鷹",
            descript:"◆ 裝備一個飛鷹雕飾。點擊「攻擊鍵」，即可向前放出飛鷹。長按「攻擊鍵」，可讓飛鷹隨著畫面上十字準星的方向轉彎。在飛行時「重施技能」，可將飛鷹化為一道閃光造成致盲，若敵人在攻擊範圍或視野內，會播放命中確認音效。"
        },
        C:{
            title:"C - 萌芽重生",
            descript:"◆ 裝備一個治療雕飾。長按「攻擊鍵」即可開始施法，治療範圍和視野內的敵軍，在其治療能量條用完前可重複施放。"
        },
        X:{
            title:"X - 追獵精靈",
            descript:"◆ 裝備一個追獵精靈雕飾。點擊「攻擊鍵」，即可放出三隻精靈，追獵三名距離最近的敵軍。精靈觸及目標時會使其視野受到限制。"
        },
    },
    Yoru:{
        Q:{
            title:"Q - 攻其不備",
            descript:"◆ 點擊「裝備鍵」，即可在現實世界撕下不穩定的次元碎片。點擊「攻擊鍵」丟出碎片，當其碰撞遊戲場景中的靜態物體時，會反彈並發出閃光。"
        },
        E:{
            title:"E - 不請自來",
            descript:"◆ 裝備裂隙繫鏈。點擊「攻擊鍵」即可射出繫鏈。點擊「輔助攻擊鍵」即可在原地放置繫鏈。按下「啟動」，即可傳送到繫鏈的位置。按下「使用鍵」，即可觸發假傳送。"
        },
        C:{
            title:"C - 聲東擊西",
            descript:"◆ 裝備一個啟動後可以變成夜戮分身的回音彈。點擊「攻擊鍵」，即可立即發動分身並向前送出。點擊「輔助攻擊鍵」，即可放置閒置的回音彈。按下「使用鍵」，即可把閒置回音彈變成分身並向前送出。分身被敵人摧毀時會爆炸並發出致盲閃光。"
        },
        X:{
            title:"X - 次元飄移",
            descript:"◆ 「裝備」一副可看到不同次元的面具。點擊「攻擊鍵」，即可進入夜戮的空間，不會被外面的敵人影響或看見。"
        },
    },
    Astra:{
        Q:{
            title:"Q - 新星震盪",
            descript:"◆ 以星體型態（X）放置星辰 按下「啟動」，可引爆星辰化作新星震盪，短暫延遲後會發動攻擊，暈眩範圍內所有玩家。"
        },
        E:{
            title:"E - 迷濛星雲",
            descript:"◆ 以星體型態（X）放置星辰 按下「啟動」，可使星辰化作迷濛星雲（煙霧）。 在星辰上按下「F鍵」可造成星解變裂來收回星辰，短暫延遲後可再次放置該星辰到不同位置。 在收回星辰之前，星解變裂會在該位置短暫形成一個假的迷濛星雲。"
        },
        C:{
            title:"C - 引力黑洞",
            descript:"◆ 以星體型態（X）放置星辰 按下「啟動」，可使星辰化作引力黑洞，將範圍內的玩家拉向中心，隨後爆炸，對所有仍困在其中的玩家施加衰弱。"
        },
        X:{
            title:"X - 星體型態／無垠星幕",
            descript:"◆ 按下「啟動」（X）可進入星體型態，使用「主要攻擊鍵」可放置星辰；之後可重新啟動星辰，化作新星震盪、迷濛星雲或引力黑洞。 無垠星幕充能完成時，以星體型態使用「輔助攻擊鍵」開始瞄準，接著使用「主要攻擊鍵」來選擇兩個位置，並在兩點之間製造一個無限延伸的無垠星幕，可擋住所有子彈，並大幅阻隔聲音傳遞。"
        },
    },
    Kayo:{
        Q:{
            title:"Q - 閃光/驅動",
            descript:"◆ 裝備一個閃光彈。點擊「攻擊鍵」即可拋出，引信快速燃盡後爆炸，致盲所有視野內的玩家。"
        },
        E:{
            title:"E - 歸零/零點",
            descript:"◆ 裝備一把抑制刃。點擊「攻擊鍵」即可拋出，附著在第一個擊中的物體表面上，進行發動，並抑制所有在爆炸範圍內的玩家。"
        },
        C:{
            title:"C - 碎片/絕殺",
            descript:"◆ 裝備一個炸彈碎片。點擊「攻擊鍵」即可拋出，附著在地面上後會連續爆炸多次，每次在爆炸中心都會造成幾近致命性的傷害。"
        },
        X:{
            title:"X - 無效/指令",
            descript:"◆ 立刻運轉超載，產生大量極化輻能，強化KAY/O自身，並釋放強大能量波，被能量波擊中的敵人會暫時受到抑制。"
        },
    },
    Chamber:{
        Q:{
            title:"Q - 獵頭手槍",
            descript:"◆ 按下「啟動」可裝備一把重火力手槍。持槍時點擊「輔助攻擊鍵」可開始瞄準射擊。"
        },
        E:{
            title:"E - 法式轉移",
            descript:"◆ 放置一個傳送錨點。錢博爾在地面上且在錨點範圍內時，按下「啟動」可瞬間移動到錨點位置。可撿起錨點，然後「重新部署」。"
        },
        C:{
            title:"C - 慢行特區",
            descript:"◆ 放置一個可偵測敵人的陷阱。非隱形的敵人進入範圍時，該陷阱倒數後會使周圍空間進入不穩定的狀態，創造一個可維持一段時間的力場，緩速範圍內的敵人。可撿起陷阱，然後「重新部署」。"
        },
        X:{
            title:"X - 浪漫狙殺",
            descript:"◆ 按下「啟動」可取出一把強大的特製狙擊槍，直接命中即可擊殺敵人。擊殺敵人後會創造一個可維持一段時間的力場，緩速範圍內的敵人。"
        },
    },
    Neon:{
        Q:{
            title:"Q - 閃電傳導",
            descript:"◆ 立刻射出一道可反彈一次的能量閃電。閃電觸物時會漏電至下方地面，造成震波暈眩敵人。"
        },
        E:{
            title:"E - 極速快檔",
            descript:"◆ 立刻運用妮虹的能力提升速度。充能完成時，點擊「輔助攻擊鍵」可發動帶電滑行。每擊殺兩名敵人可重置滑行充能數。"
        },
        C:{
            title:"C - 加速電牆",
            descript:"◆ 點擊「攻擊鍵」，即可往前方地面發射兩道能量標線，行進短距離或觸物後停止，標線會升起靜電牆，阻擋視野並對穿過的敵人造成傷害。"
        },
        X:{
            title:"X - 電能超載",
            descript:"◆ 短時間內解放妮虹的全力和全速。點擊「攻擊鍵」，即可將體內能量化為移動射擊準確度高的致命電光射出，每次擊殺敵人即可重置冷卻時間。"
        },
    },
    Fade:{
        Q:{
            title:"Q - 咒縛夢魘",
            descript:"◆ 裝備一個充滿惡夢之墨的靈球，點擊「攻擊鍵」即可丟出靈球，靈球經過一定時間後會墜落地面。觸碰到地面時，靈球會爆炸並產生一個區域，在區域內的敵軍無法使用正常手段離開。「重施技能」可讓靈球提前墜地。"
        },
        E:{
            title:"E - 惡夢幽魂",
            descript:"◆ 裝備一個惡夢靈體，點擊「攻擊鍵」即可丟出靈球，靈球經過一定時間後會墜落地面。觸碰到地面時，靈球將變為惡夢靈體，揭露所有在其視野範圍內的敵方行蹤，敵軍可破壞此靈體。「重施技能」可讓靈球提前墜地。"
        },
        C:{
            title:"C - 潛行夢魔",
            descript:"◆ 裝備一個夢魔，點擊「攻擊鍵」即可放出夢魔沿著直線行進。夢魔會鎖定在其前方錐形視野區域內的敵軍和軌跡並開始追獵，觸碰到敵方時會限制其視野。長按「攻擊鍵」能操控夢魔，依照十字準星的方向轉彎。"
        },
        X:{
            title:"X - 夜幕降臨",
            descript:"◆ 裝備恐懼之力，點擊「攻擊鍵」釋放出一波惡夢能量，該能量可穿過牆面，且會產生通往敵軍位置的軌跡，同時侵蝕並致聾敵方。"
        },
    },
    Harbor:{
        Q:{
            title:"Q - 防彈海灣",
            descript:"◆ 裝備一個防彈水球。點按「攻擊鍵」即可拋出。點按「輔助攻擊鍵」可低手拋出。水球接觸到地面時，會生成一個可破壞的水製護盾，可以擋下子彈。"
        },
        E:{
            title:"E - 上古水牆",
            descript:"◆ 裝備一道水牆。點按「攻擊鍵」即可沿著地面向前送出水流。長按「攻擊鍵」，可讓水牆隨著畫面上十字準星的方向轉彎，穿過地形，沿著水流生成水牆。操縱水流方向時按下「輔助攻擊鍵」可以提早停止水流。被擊中的玩家會被緩速。"
        },
        C:{
            title:"C - 無畏浪潮",
            descript:"◆ 裝備一道湧浪。點按「攻擊鍵」即可向前送出湧浪，可穿過牆體。「重施技能」可停止湧浪。被擊中的玩家會被緩速。"
        },
        X:{
            title:"X - 湧泉審判",
            descript:"◆ 裝備古文物的全力。點按「攻擊鍵」即可在地面上召喚一個間歇泉池，在範圍內的敵方玩家會受到間歇泉連續攻擊，被擊中的玩家會受到暈眩。"
        },
    },
    Gekko:{
        Q:{
            title:"Q - 震翼鳥人",
            descript:"◆ 裝備鳥人。點按「攻擊鍵」即可向前放出鳥人搜敵。鳥人會炸出震波暈眩第一位看見的敵人。瞄準據點或輻能核心時點按「輔助攻擊鍵」，即可讓鳥人安裝或拆除輻能核心。蓋克的物品欄中必須有輻能核心才能安裝。鳥人的時間一到就會回復成休眠的球體。點按「互動鍵」即可回收球體，經過短暫的冷卻時間後便可獲得另一次鳥人充能。"
        },
        E:{
            title:"E - 頭暈目眩",
            descript:"◆ 裝備眩眩。點按「攻擊鍵」即可讓眩眩向前飛。眩眩充能後，對視野內的敵人發射電漿砲，被電漿砲擊中的敵人會遭到致盲。眩眩的時間一到就會回復成休眠的球體。點按「互動鍵」即可回收球體，經過短暫的冷卻時間後便可獲得另一次眩眩充能。"
        },
        C:{
            title:"C - 爆爆領域",
            descript:"◆ 裝備爆爆。點按「攻擊鍵」即可將爆爆當成手榴彈投出。點按「輔助攻擊鍵」可低手拋出。爆爆落地後會在大範圍內複製增生，並在短暫延遲後爆炸。"
        },
        X:{
            title:"X - 鯊無赦",
            descript:"◆ 裝備鯊鯊。點按「攻擊鍵」即可與其心智連結，操控她穿越敵軍陣地。按下「啟動鍵」可使鯊鯊向前衝並爆炸，拘束小範圍內所有敵人。鯊鯊的時間一到就會回復成休眠的球體。點按「互動鍵」即可回收球體，經過短暫的冷卻時間後便可獲得另一次鯊鯊充能。鯊鯊只能回收一次。"
        },
    },
    Deadlock:{
        Q:{
            title:"Q - 聲波感測器",
            descript:"◆ 裝備一個聲波感測器。點按「攻擊鍵」部署。感測器會偵測範圍內敵人發出的聲音，只要偵測到腳步聲、槍聲或是明顯聲響，就會暈眩範圍內的敵人。"
        },
        E:{
            title:"E - 天羅地網",
            descript:"◆ 裝備一個天羅地網圓盤。點按「攻擊鍵」向前投出。圓盤落地時會在原點到落點之間生成屏障，阻隔角色移動。"
        },
        C:{
            title:"C - 重力網",
            descript:"◆ 裝備一個重力網手榴彈。點按「攻擊鍵」即可投出。點按「輔助攻擊鍵」可低手拋出手榴彈。重力網一落地就會引爆，迫使所有被網住的敵人蹲下並緩速。"
        },
        X:{
            title:"X - 在繭難逃",
            descript:"◆ 裝備一個奈米線加速器。點按「攻擊鍵」射出大量奈米線，捕捉第一個碰到的敵人。敵人被裹住後會沿著奈米線路徑被拖行，如不設法脫困，被拖至終點就會死亡。奈米繭可被破壞。"
        },
    },
    Iso:{
        Q:{
            title:"Q - 削減",
            descript:"◆ 裝備一枚分子螺旋彈，點按「攻擊鍵」即可向前拋擲，暫時使被觸及的所有玩家「衰弱」。此彈體可貫穿牆壁等堅硬物體。"
        },
        E:{
            title:"E - 雙源",
            descript:"◆ 開始專注倒數，計時結束後進入殺戮心流狀態，此時對手遭到擊殺、或受到離索的傷害陣亡後會產生能量球。離索射擊此能量球即可獲得護盾，吸收下一次受到的任何傷害。"
        },
        C:{
            title:"C - 應變",
            descript:"◆ 點按「裝備鍵」，即可凝聚稜光能量，接著點按「攻擊鍵」即可向前送出一道無法破壞的能量牆，阻擋子彈。"
        },
        X:{
            title:"X - 決滅",
            descript:"◆ 裝備一個次元空間，點按「攻擊鍵」即可擲出一道貫穿戰場的能量束，將第一位命中的對手與自身拉進空間內。雙方必須在空間內決鬥，至死方休。"
        },
    },
    Clove:{
        Q:{
            title:"Q - 驚奇干涉",
            descript:"◆ 裝備一塊永生精粹碎片。點擊「攻擊鍵」即可向前拋擲，碎片會在短暫延遲後爆發，對範圍內所有目標造成暫時「侵蝕」效果。"
        },
        E:{
            title:"E - 瑰詭煙雲",
            descript:"◆ 點擊「裝備鍵」，可一觀戰場。點擊「攻擊鍵」，可指定放置煙幕的地點。點擊「輔助攻擊鍵」進行確認，在指定區域產生一大片煙幕，阻擋視野。珂樂芙可在陣亡後施放此技能。"
        },
        C:{
            title:"C - 精魂再生",
            descript:"◆ 立即吸收珂樂芙擊殺或助攻之陣亡對手的生命能量，獲得加速與暫時生命。"
        },
        X:{
            title:"X - 續命開關",
            descript:"◆ 陣亡後，按下「啟動鍵」即可復活。復活之後，珂樂芙必須在一定時間內造成擊殺或助攻，否則便會再次陣亡。"
        },
    },
};

function onLoad(){
    const agent_select = document.querySelector('#agent-select');
    agent_select.click();
}

function select_event(value) {
    document.getElementById("Brimstone").style.display = "none";
    document.getElementById("Phoenix").style.display = "none";
    document.getElementById("Sage").style.display = "none";
    document.getElementById("Sova").style.display = "none";
    document.getElementById("Viper").style.display = "none";
    document.getElementById("Cypher").style.display = "none";
    document.getElementById("Reyna").style.display = "none";
    document.getElementById("Killjoy").style.display = "none";
    document.getElementById("Breach").style.display = "none";
    document.getElementById("Omen").style.display = "none";
    document.getElementById("Jett").style.display = "none";
    document.getElementById("Raze").style.display = "none";
    document.getElementById("Skye").style.display = "none";
    document.getElementById("Yoru").style.display = "none";
    document.getElementById("Astra").style.display = "none";
    document.getElementById("Kayo").style.display = "none";
    document.getElementById("Chamber").style.display = "none";
    document.getElementById("Neon").style.display = "none";
    document.getElementById("Fade").style.display = "none";
    document.getElementById("Harbor").style.display = "none";
    document.getElementById("Gekko").style.display = "none";
    document.getElementById("Deadlock").style.display = "none";
    document.getElementById("Iso").style.display = "none";
    document.getElementById("Clove").style.display = "none";

    if (value == "brimstoneSelect") {
        document.getElementById("Brimstone").style.display = "";
    }
    else if (value === "phoenixSelect") {
        document.getElementById("Phoenix").style.display = "";
    }
    else if (value === "sageSelect") {
        document.getElementById("Sage").style.display = "";
    }
    else if (value === "sovaSelect") {
        document.getElementById("Sova").style.display = "";
    }
    else if (value === "viperSelect") {
        document.getElementById("Viper").style.display = "";
    }
    else if (value === "cypherSelect") {
        document.getElementById("Cypher").style.display = "";
    }
    else if (value === "reynaSelect") {
        document.getElementById("Reyna").style.display = "";
    }
    else if (value === "killjoySelect") {
        document.getElementById("Killjoy").style.display = "";
    }
    else if (value === "breachSelect") {
        document.getElementById("Breach").style.display = "";
    }
    else if (value === "omenSelect") {
        document.getElementById("Omen").style.display = "";
    }
    else if (value === "jettSelect") {
        document.getElementById("Jett").style.display = "";
    }
    else if (value === "razeSelect") {
        document.getElementById("Raze").style.display = "";
    }
    else if (value === "skyeSelect") {
        document.getElementById("Skye").style.display = "";
    }
    else if (value === "yoruSelect") {
        document.getElementById("Yoru").style.display = "";
    }
    else if (value === "astraSelect") {
        document.getElementById("Astra").style.display = "";
    }
    else if (value === "kayoSelect") {
        document.getElementById("Kayo").style.display = "";
    }
    else if (value === "chamberSelect") {
        document.getElementById("Chamber").style.display = "";
    }
    else if (value === "neonSelect") {
        document.getElementById("Neon").style.display = "";
    }
    else if (value === "fadeSelect") {
        document.getElementById("Fade").style.display = "";
    }
    else if (value === "harborSelect") {
        document.getElementById("Harbor").style.display = "";
    }
    else if (value === "gekkoSelect") {
        document.getElementById("Gekko").style.display = "";
    }
    else if (value === "deadlockSelect") {
        document.getElementById("Deadlock").style.display = "";
    }
    else if (value === "isoSelect") {
        document.getElementById("Iso").style.display = "";
    }
    else if (value === "cloveSelect") {
        document.getElementById("Clove").style.display = "";
    }
    
}

function showSkillDescript(input){
    let character = input.split("_")[0];
    character = character[0].toUpperCase() + character.substring(1,character.length);
    let skill = input.split("_")[1];

    const skill_descript = document.querySelector(`#${character} .skill_descript`);
    const title = skill_descriptions[character][skill]["title"];
    const descript = skill_descriptions[character][skill]["descript"]

    const titleElement = document.createElement("h1");
    const contentElement = document.createElement('p');

    titleElement.innerHTML = title;
    titleElement.className = "skillTitle";
    
    contentElement.innerHTML = descript;
    contentElement.className = "skillContent";


    skill_descript.innerHTML = "";
    skill_descript.appendChild(titleElement);
    skill_descript.appendChild(contentElement);


    addClass(input);

    function addClass(id){
        const contentBtns = document.querySelectorAll(".contentBtn");
        contentBtns.forEach(btn => btn.className = "contentBtn");

        const target = document.querySelector(`#${id}`);
        if(target.className.split(' ').length != 2) {
            target.className += " selected";
        }
    }
}

const imgs = document.getElementById('mapimgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('#mapimgs img')
const maps = document.getElementById('mapnames')
const lb = document.querySelectorAll('#mapnames span')

let idx = 0
let idy = 0


function run() {
    idx++
    idy++
    changeImage()
    changetext_lb()

}

function changetext_lb() {
    if( idy > lb.length - 1) {
        idy = 1
    } else if( idy < 0) {
        idy = lb.length - 1
    }

    mapnames.style.transform = `translateX(${-idy * 330}px)`
}

function changeImage() {
    if( idx > img.length - 1 ) {
        idx = 1
    } else if( idx < 0 ) {
        idx = img.length - 1
    }

    mapimgs.style.transform = `translateX(${-idx * 1200}px)`
}

rightBtn.addEventListener('click', () => {
    idx++
    idy++
    changeImage()
    changetext_lb()
})

leftBtn.addEventListener('click', () => {
    idx--
    idy--
    changeImage()
    changetext_lb()
})


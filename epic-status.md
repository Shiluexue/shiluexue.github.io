# EPIC 案例 · 交接状态

*更新于 2026-09-11 · 文件：`Portfolio/projects/ai-search.html`（B 版，`#epic`）*

---

## 一、这次做完了什么：05 定稿

05 的定位从"讲两个交互功能"改成了**讲两次把控制权还给用户**。整章现在是一条闭合的线：

```
开场    Search used to be predictable → AI 改变了这一点
        ↓ Two things had slipped out of the traveler's hands:
          what the page shows, and when it moves.
Challenge 01  what the page shows  →  choice
Challenge 02  when it moves        →  pace
章尾    Design principle
```

### 各段落最终状态

| 位置 | 内容 | 素材 |
|---|---|---|
| 章节 claim | *AI doesn't ask for the page. It takes it the moment it starts writing.* | — |
| 开场（4 段） | predictable → AI breaks it → controlled by generation → 两件事失控 | — |
| **Challenge 01** | *One AI experience cannot fit every moment* | 三张人群卡（插画头像 + 态度徽章） |
| Solution 01 | *Make AI available, never mandatory* → 收在 **choice** | 两段视频（A 留在答案 / B 上滑吸顶再回来）+ 四态静态全景图 |
| **Challenge 02** | *When AI moves faster than users can follow* | 夸克灾难现场视频（左视频右文字） |
| Solution 02 | *Put users back in control of generation* → 收在 **pace** | 静态图 + 录屏并排，文字在左 |
| 章尾 | Design principle + V1 占位 + 上线一句 | — |

### 关键写作判断（都是反复推翻后定下来的，别再回头改）

- **Challenge 02 必须承接 01 的解法失效**，不能重新定义问题。开场那句 `But choice alone was not enough.` 是这条因果链的铰链。
- **吸顶失效是 02 的核心机制**，不是"页面会动"。原因：滑动速度追不上生成速度，所以模块永远不收起。
- **删掉了 "200 pixels"**——没有埋点数据支撑，portfolio 里精确到像素会被追问口径。
- **"Search 是静态页面"这个对比只在开场用一次**，02 不再重复。
- 用户视角 ≠ 用 "she"。是**切入点**从产品/模型转到用户，人称仍用 users / the traveler。
- 段落能合并就合并，一段内只保留一处加粗。

### 素材处理约定

- 所有录屏：**保留原始比例，不裁任何一边**（裁状态栏会切掉机身顶部，得不偿失）
- HEVC → H.264，去音轨，`+faststart`，crf 26，宽度统一 540
- 属性：`autoplay muted loop playsinline preload="metadata"`，配首帧 poster
- 只裁开头的输入过程（搜索建议页），不裁画面
- 文件都在 `Portfolio/videos/` 和 `Portfolio/images/`，文件名固定，换素材不用动 HTML

新增的 CSS 组件（都在 `</style>` 前）：`.personas` / `.persona`（人群卡）、`.vidstage`（卡片内视频舞台）、`.vidsplit` / `.vidsplit--rev`（左右排版）、`.pausepair`（文字 + 图 + 视频三列）、`.chainset`（多行链路）、`.wideshot`（整宽容器图）。

---

## 二、全篇还欠什么

### P0 — 影响能不能给人看

1. **删掉 A/B 切换器和整个 `#epic-a`**
   文件里还有 `ab-switch` 和 `epic-legacy` 两处。评委看到"A 版/B 版"开关会立刻判断这是半成品。发布前必须清掉。

2. **补 05 的最后一个占位：`[ V1 · final UI and interaction prototype ]`**
   现在 05 的三块解法都有画面了，唯独最终成品没有。这是整章的收尾，缺了会像"讲完过程没给结果"。

3. **06 / 07 还有四个占位**
   - `[ Completion rate · expand & read behaviour · dwell time · AI engagement ]`
   - `[ Orders · diversion · conversion · feed engagement ]`
   - `[ Post-launch occupancy · average AI height, first-screen result visibility, feed impressions ]`
   - `[ Experiment · fixed-height AI — design and screens ]`

### P1 — 影响可信度

4. **06 的因果链缺一环**
   现在是"留存涨了 → 所以 AI 有价值"，中间少了"留存为什么涨"。需要完读率 / 停留时长 / AI 互动这组数据填进第一个占位，才能说：人真的读了 → 读了才回来。没有这一环，"retention up" 可以被归因成上线新鲜感。

5. **03 的"one in five"和 06/07 的样本对不上**
   03 说三类任务覆盖约五分之一搜索，06 的订单基数只有 25,519。评委会算这笔账。建议在 06 开头补一句口径锚点，或在 03 补一句"EPIC 首发范围更窄（仅综合结果页）"。

6. **07 的三条 trade-off 没有数据**
   "Long, dense answers lowered completion / exposure dropped / path got longer" 目前是断言。哪怕只有一个埋点数字也要标上，否则 07 的实验动机看起来像拍脑袋。

### P2 — 影响记不记得住

7. **重复待清**：Challenge 01 结尾的 `choice` / Challenge 02 结尾的 `pace` 已经和章尾 principle 形成层级，但章尾那句 *AI should assist the journey — never take control of it* 还是旧版。你自己写过一个更准的：*AI can assist the journey, but travelers should remain in control of the journey.* 换不换待定。

8. **06 之后情绪掉下去**：全篇最高点在 05（专利），之后是两个 `not significant`。06 的 flat orders 已经改成"定位价值"而不是失败，但 07 结尾还是直接进三条反思。建议在反思前插一句有态度的总结再收。

9. **01–04 还有约 900 词复述可删**（详见 `epic-critique.md` 第二节的逐段清单）。目标是把全文从 13 分钟压到 8 分钟以内。

10. **封面还没定**：之前提过 5 个方向，你没选。

11. **首页章节列表**：02/03 两行还是 `coming soon`，等对应章节写完要换成真链接。

---

## 三、下次从哪儿开始

按这个顺序，每一步都能独立完成、不依赖上一步：

1. **补 V1 成品图**（05 的最后一个洞）→ 05 就彻底完成了
2. **删 A/B 切换器 + `#epic-a`** → 这一步做完，B 版就可以直接给人看
3. **填 06 的完读/停留数据** → 补上最大的论证漏洞
4. 剩下三个占位（06 订单、07 占比、07 实验）
5. 按 `epic-critique.md` 的清单删 01–04 的复述
6. 章尾 principle / 07 结尾 / 封面 —— 这三个是打磨，不是阻塞

---

## 四、工作方式备忘（避免重复踩坑）

- 改文件用 `device_bash` + python 直接读写原文件，**不要经过 `/tmp` 临时文件再 cp**——脚本报错时 cp 仍会执行，会把旧副本盖回去，覆盖你手动改的排版。这次已经踩过一次。
- 每个 python 补丁里都带 `assert s.count(old)==1`，匹配失败就不写，不会半途写坏。
- epic-a 和 epic-b 里有大量重复字符串，定位 B 版要用 `rindex` 而不是 `index`。
- 验证渲染：staged 到云端 → Playwright 截元素图 → 读图。`loading="lazy"` 的图在截图里不会加载，需要先把 `loading` 改成 `eager`。
- 小标题统一用 `sec-claim t-pair`，**不要加 inline margin**，间距由这个类管。

---

## 五、还没拿到的素材

- 05 的 V1 成品图或原型录屏
- 06 的完读率 / 停留时长 / AI 互动数据
- 07 的 trade-off 埋点数字、post-launch 占比数据、定高实验的设计稿
- 封面方向的选择

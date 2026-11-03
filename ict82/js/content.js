/* Concept content, taken from the ICT 82 PDF guide. Key = concept URL name (see data.js).
   e explanation, d definition, x bullish/bearish examples, r identification rules, p practical example, i important notes. */
const CONTENT={
"buy-side-liquidity": {
"e": "Liquidity resting above identifiable highs. In ICT analysis, buy stops and breakout-buy orders above highs are treated as a potential price draw.",
"d": "A cluster of buy orders, especially buy-stop orders, located above prior swing highs, equal highs or other obvious highs.",
"x": "Bullish context: after price trades below a range, it may rally through BSL above the range highs. Bearish context: price may raid BSL above highs and then reverse lower; the raid itself is not proof of reversal.",
"r": "Mark obvious highs on the chosen timeframe; note equal/near-equal highs and prior session or day highs. Treat the area as a zone, not a single guaranteed tick.",
"p": "Mark yesterday's high; if price trades above it, observe whether it accepts above (possible continuation) or quickly rejects and shifts lower (possible bearish setup).",
"i": "A high being taken is not automatically manipulation. Stops are inferred from chart structure, not directly visible. Confirm with displacement/structure and manage risk."
},
"sell-side-liquidity": {
"e": "Liquidity resting below identifiable lows. ICT traders watch these levels as potential downside objectives or locations where sell stops may be triggered.",
"d": "A cluster of sell orders, particularly sell-stop orders, below swing lows, equal lows and obvious support lows.",
"x": "Bullish context: price sweeps below SSL and then reclaims the level with bullish displacement. Bearish context: price breaks below SSL and continues lower, using it as a liquidity objective.",
"r": "Mark swing lows, equal lows, range lows and prior session/day lows. Distinguish a wick raid from sustained acceptance below the level.",
"p": "Price dips beneath a previous day's low, then closes back above and breaks a short-term high; this can support a bullish reversal hypothesis.",
"i": "A sweep does not guarantee reversal. A strong close and follow-through below the low may indicate continuation instead."
},
"liquidity-pool": {
"e": "A price area where orders are thought to be concentrated, often around obvious highs/lows and repeated extremes.",
"d": "A grouping of potential resting orders at or around a commonly watched price level.",
"x": "Bullish example: a sell-side pool below equal lows is swept before an upward move. Bearish example: a buy-side pool above equal highs is swept before a downward move.",
"r": "Look for repeated highs/lows, clear swing points, session extremes and range boundaries. More visible levels may attract more attention, but no pool size is known from price alone.",
"p": "Before the session, mark equal highs and lows; observe which pool price reaches first and how price behaves after reaching it.",
"i": "Liquidity pools are analytical estimates, not an exchange order-book measurement. Avoid assuming every visible level must be taken. Page 3"
},
"equal-highs": {
"e": "Two or more highs formed at approximately the same price, often watched as a buy-side liquidity reference.",
"d": "A cluster of swing highs with little price separation; exact equality is not required.",
"x": "Bullish example: price breaks above EQH and holds, potentially continuing higher. Bearish example: price wicks above EQH, rejects and displaces lower.",
"r": "Identify at least two distinct highs; compare their prices relative to the instrument's tick size and timeframe. Avoid forcing equality between unrelated peaks.",
"p": "Draw a horizontal zone across two similar intraday highs and wait for a raid plus confirmation rather than selling solely because the highs match.",
"i": "EQH can be resistance, breakout structure or liquidity. The response after the level is reached matters."
},
"equal-lows": {
"e": "Two or more lows near the same price, often treated as a sell-side liquidity reference.",
"d": "A cluster of swing lows separated by a small price difference.",
"x": "Bullish example: price trades below EQL, reclaims it and rallies. Bearish example: price breaks below EQL and accepts lower, continuing the decline.",
"r": "Find at least two clear lows at similar prices; mark the area and watch closes and follow-through around it.",
"p": "Mark matching lows under a consolidation; after a brief downside raid, look for bullish displacement and a retracement entry model.",
"i": "Not every pair of lows is meaningful. A clean breakdown can be continuation rather than a reversal."
},
"liquidity-sweep": {
"e": "Price briefly trades through a known liquidity level and then returns back across it, suggesting stops beyond the level were triggered.",
"d": "A temporary penetration of a prior high/low followed by rejection or reclaim; traders often seek confirmation from subsequent price delivery.",
"x": "Bullish: price sweeps below a prior low then reclaims it and moves higher. Bearish: price sweeps above a prior high then falls back below and moves lower.",
"r": "Pre-mark the level; observe a trade beyond it and a return across it. Stronger evidence includes displacement and a break of a nearby opposing swing.",
"p": "A 5-minute candle wicks below equal lows, closes back above, and the next impulse breaks a short-term high; the sequence is a candidate bullish sweep setup.",
"i": "A wick alone is not a complete trade signal. News spikes and thin liquidity can produce false interpretations."
},
"liquidity-raid": {
"e": "A term commonly used for price reaching through a liquidity pool, often emphasizing the taking of stops before a move away.",
"d": "A directional run through a known high/low liquidity area; usage overlaps substantially with liquidity sweep.",
"x": "Bullish: a raid below sell-side liquidity precedes bullish repricing. Bearish: a raid above buy-side liquidity precedes bearish repricing.",
"r": "Identify the target pool before the move; note whether price runs it and whether subsequent candles show rejection or continuation.",
"p": "Price trades above the Asian high during London, then rapidly returns below it and breaks a nearby low: a possible bearish raid narrative.",
"i": "Some educators distinguish a raid from a sweep; others use them interchangeably. State your own rule consistently. Page 4"
},
"inducement": {
"e": "A minor swing or apparent opportunity that may encourage traders to enter early, leaving liquidity for price to take before reaching its intended objective.",
"d": "A local liquidity point regarded in a particular ICT dealing-range narrative as inducement before the main draw.",
"x": "Bullish: a minor low is taken before price rallies toward a larger high. Bearish: a minor high is taken before price declines toward a larger low.",
"r": "First define the broader dealing range and likely draw; then identify a smaller internal swing that forms before the target. The label is contextual, not mechanically certain.",
"p": "In a bullish range, mark a small higher low below current price; price dips through it, then displaces upward toward external highs.",
"i": "Do not label every stop-out as inducement after the fact. It is a narrative hypothesis and can be subjective."
},
"internal-range-liquidity": {
"e": "Liquidity and price inefficiencies located inside the current dealing range, rather than beyond its external boundaries.",
"d": "Internal reference points within a defined range, often including internal swing highs/lows and imbalances such as FVGs.",
"x": "Bullish: price trades into an internal discount FVG before moving toward range highs. Bearish: price retraces to an internal premium imbalance before moving toward range lows.",
"r": "Define the dealing range first; map internal highs/lows and inefficiencies between its high and low.",
"p": "Within a weekly range, identify a daily FVG near the midpoint as an internal draw before the market targets the weekly high.",
"i": "IRL depends on the range and timeframe selected. Do not confuse internal objectives with external range extremes."
},
"external-range-liquidity": {
"e": "Liquidity beyond the high or low boundaries of a defined dealing range.",
"d": "Potential stop clusters resting outside a selected range's extremes.",
"x": "Bullish: price seeks buy-side liquidity above the range high. Bearish: price seeks sell-side liquidity below the range low.",
"r": "Choose a clear range with defined high and low; mark external stops just beyond each boundary.",
"p": "After consolidating between Monday's high and low, price moves toward the prior week's high above the range.",
"i": "A range must be defined consistently. External liquidity can be taken and price can continue or reverse."
},
"draw-on-liquidity": {
"e": "The liquidity objective that price is expected to seek next, based on context, range and directional bias.",
"d": "A projected target such as a prior high/low, equal highs/lows or another identifiable liquidity pool.",
"x": "Bullish: the chosen DOL is BSL above a prior swing high. Bearish: the chosen DOL is SSL beneath a prior swing low.",
"r": "Map higher-timeframe structure, current range, nearby pools and session context; select the most relevant unfilled objective.",
"p": "If daily bias is bullish and sell-side liquidity has been swept, identify the next clear daily/weekly high as a possible draw.",
"i": "DOL is a hypothesis, not a prediction guarantee. Reassess when structure or context changes. Page 5"
},
"stop-hunt": {
"e": "A common trading phrase for a move through an obvious stop area that triggers stop orders; ICT discussions often frame it as a liquidity raid.",
"d": "Price movement through a level where stop-loss orders are likely clustered.",
"x": "Bullish: a downward stop run below lows reverses upward. Bearish: an upward run above highs reverses downward.",
"r": "Mark obvious highs/lows and observe a break followed by reclaim/rejection; require additional confirmation before treating it as a reversal.",
"p": "A market spikes above a range high, closes back inside, then breaks a short-term low; this may be described as a buy-stop hunt.",
"i": "The term can imply intent that cannot be proven from a chart. A breakout may be genuine, so avoid assuming every stop run reverses."
},
"previous-day-high": {
"e": "The highest traded price of the previous trading day, used as a reference for liquidity and daily range analysis.",
"d": "The prior day's high according to the chart's session/time-zone settings.",
"x": "Bullish: price breaks PDH and holds above it. Bearish: price raids PDH and rejects, then shifts lower.",
"r": "Use a consistent daily candle/session template; plot the prior day's high before the current session.",
"p": "At New York open, price approaches PDH; watch for acceptance above or a rejection and bearish displacement.",
"i": "Forex, futures and crypto daily boundaries differ by feed/session settings. Verify the chart's day cut-off."
},
"previous-day-low": {
"e": "The lowest traded price of the previous trading day and a common sell-side liquidity reference.",
"d": "The prior day's low using the chart's defined trading-day boundary.",
"x": "Bullish: price sweeps PDL and reclaims it. Bearish: price breaks and holds below PDL.",
"r": "Plot the prior day's low on the same data feed and session template used for analysis.",
"p": "If price runs below PDL then breaks an intraday swing high, a bullish reversal model may be considered.",
"i": "The daily boundary varies across markets and platforms; document your session settings."
},
"previous-week-high": {
"e": "The highest price reached during the preceding trading week; a higher-timeframe reference.",
"d": "The previous completed week's high based on the selected weekly session.",
"x": "Bullish: price clears PWH and sustains above. Bearish: price raids PWH and reverses lower.",
"r": "Plot the prior completed weekly high; avoid using the still-forming current week's high.",
"p": "A weekly bullish narrative may target PWH after price reclaims a daily discount array.",
"i": "Weekly candle boundaries vary by broker and instrument. Keep the data source consistent. Page 6"
},
"previous-week-low": {
"e": "The lowest price of the preceding completed trading week, often used as a sell-side objective.",
"d": "The previous completed week's low under the selected weekly session definition.",
"x": "Bullish: price sweeps PWL and reverses upward. Bearish: price breaks below PWL and extends lower.",
"r": "Mark the prior completed weekly low and monitor reaction when price approaches it.",
"p": "Price trades below PWL, quickly reclaims it and forms a bullish displacement leg on the 1-hour chart.",
"i": "A level is a reference, not guaranteed support. Check higher-timeframe context and news risk."
},
"previous-month-high": {
"e": "The highest price of the previous completed calendar/trading month, used as a broad liquidity reference.",
"d": "The prior month's high, calculated from the platform's monthly candles.",
"x": "Bullish: price accepts above PMH, suggesting expansion. Bearish: price sweeps PMH and rejects lower.",
"r": "Plot the prior completed monthly high; verify whether the platform's monthly candle follows the intended market session.",
"p": "A weekly bullish setup may use PMH as an external upside objective.",
"i": "Monthly boundaries and instrument sessions can differ. Large levels may be far from intraday price."
},
"previous-month-low": {
"e": "The lowest price of the previous completed month, used as a broad sell-side reference.",
"d": "The prior month's low from the selected chart feed.",
"x": "Bullish: price raids PML and reclaims it. Bearish: price breaks below and continues lower.",
"r": "Plot the prior completed monthly low and observe acceptance/rejection around it.",
"p": "A downside move reaches PML; after reclaim and bullish shift, traders may reassess toward internal highs.",
"i": "Do not assume a monthly low must reverse price; it may be broken decisively."
},
"fair-value-gap": {
"e": "A three-candle price inefficiency where the first and third candles do not overlap across a price interval, often created by displacement.",
"d": "Bullish FVG: candle 1 high is below candle 3 low. Bearish FVG: candle 1 low is above candle 3 high.",
"x": "Bullish: a strong up move leaves a gap between candle 1 high and candle 3 low; price later retraces into it and reacts upward. Bearish: a strong down move leaves the inverse gap; retracement may react lower.",
"r": "Use three consecutive candles. For bullish FVG, mark C1 high to C3 low; for bearish FVG, mark C3 high to C1 low. The middle candle often shows displacement.",
"p": "After a sell-side sweep, an impulsive rally creates a bullish FVG; wait for price to retrace into the gap and seek confirmation toward BSL.",
"i": "An FVG is not proof of institutional orders or a guaranteed fill/reversal. Some gaps are fully traversed; timeframe and context matter. Page 7"
},
"inverse-fair-value-gap": {
"e": "An FVG that fails to hold as support/resistance and is then treated as an opposite-direction reference when price re-enters from the other side.",
"d": "A previously identified FVG that is violated through its far boundary and subsequently acts as an inverse reaction area.",
"x": "Bullish: a bearish FVG is broken upward; a later retest from above may support price. Bearish: a bullish FVG is broken downward; a retest from below may resist price.",
"r": "Mark the original FVG; define what constitutes failure (commonly a decisive close through the far side); then watch a return test from the opposite side.",
"p": "Price falls through a bullish FVG, closes below it, then rallies back into the gap and rejects; this may be used as a bearish IFVG.",
"i": "The exact failure/entry rule varies. A wick through the zone alone may not satisfy a close-based model."
},
"volume-imbalance": {
"e": "A gap or lack of overlap between candle bodies/open-close prices, commonly interpreted as an inefficiency in price delivery.",
"d": "A price interval between adjacent candle bodies where their open/close ranges do not overlap, depending on the specific ICT definition used.",
"x": "Bullish: a fast rise leaves a body-to-body imbalance that later acts as a retracement reference. Bearish: a fast decline leaves the inverse imbalance.",
"r": "Compare adjacent candle bodies rather than applying the three-candle FVG wick rule; mark the non-overlapping body interval.",
"p": "On a fast bullish 15-minute expansion, mark the body gap between consecutive candles and observe whether a later retracement rebalances it.",
"i": "VI definitions and drawing conventions differ among educators and platforms. Do not confuse it with exchange volume data."
},
"buyside-imbalance-sellside-inefficiency": {
"e": "An ICT label for a bullish fair-value-gap type of imbalance: price delivers upward with an inefficient interval.",
"d": "Typically the bullish FVG configuration, where candle 1 high is below candle 3 low.",
"x": "Bullish: upward displacement forms BISI; price may retrace into it and continue higher. Bearish context: if the BISI fails and price trades through it, it may cease acting as support.",
"r": "Apply the three-candle bullish FVG rule and mark the interval between candle 1 high and candle 3 low.",
"p": "After a bullish MSS, identify a BISI left by displacement and use its retracement as one possible long-entry reference.",
"i": "The acronym expands as Buyside Imbalance, Sellside Inefficiency. It describes price delivery, not a standalone entry signal."
},
"sellside-imbalance-buyside-inefficiency": {
"e": "An ICT label for a bearish FVG-type imbalance formed during downward price delivery.",
"d": "Typically the bearish FVG configuration, where candle 1 low is above candle 3 high.",
"x": "Bearish: downward displacement forms SIBI; price may retrace into it and continue lower. Bullish context: a decisive break above it may invalidate its bearish role.",
"r": "Apply the three-candle bearish FVG rule and mark between candle 3 high and candle 1 low.",
"p": "After a buy-side raid and bearish shift, mark the SIBI created by the sell impulse; a retracement into it may offer a short reference.",
"i": "A SIBI is not automatically resistance or a trade. Context and response matter. Page 8"
},
"balanced-price-range": {
"e": "An overlapping area created when a bullish and bearish FVG overlap, representing a zone where opposing imbalances intersect.",
"d": "The price interval common to a bullish FVG and a bearish FVG.",
"x": "Bullish: price reclaims an overlapping BPR from below and holds it. Bearish: price rejects a BPR from above and moves lower.",
"r": "Identify one bullish and one bearish FVG; draw their shared price interval. If they do not overlap, there is no BPR.",
"p": "A bearish FVG overlaps part of an earlier bullish FVG; after a sell-side sweep, price reclaims the overlap and uses it as support.",
"i": "BPR boundaries depend on the exact FVGs selected. It is not inherently bullish or bearish."
},
"liquidity-void": {
"e": "A relatively rapid price movement through a broad area with little two-way trading or limited candle overlap.",
"d": "A visually thinly traded/inefficient price region, often represented by consecutive large directional candles.",
"x": "Bullish: a fast rally leaves a void below that price may later revisit before continuing. Bearish: a sharp decline leaves a void above that may be revisited.",
"r": "Look for consecutive directional candles, shallow retracements and limited overlap; mark the entire impulsive leg rather than one tiny gap.",
"p": "A news-free impulsive rally leaves a wide low-overlap region; a later pullback into it is monitored for rebalancing.",
"i": "Candles alone do not reveal actual traded volume at every price. A void may not fill completely."
},
"consequent-encroachment": {
"e": "The 50% midpoint of a selected PD array or imbalance, used as a reference for partial mitigation or reaction.",
"d": "The arithmetic midpoint between the upper and lower boundaries of the selected array.",
"x": "Bullish: price retraces to the CE of a bullish FVG and reacts upward. Bearish: price rallies to the CE of a bearish FVG and rejects lower.",
"r": "Mark the array's two boundaries and calculate their midpoint; do not confuse it with the 50% midpoint of an unrelated dealing range.",
"p": "A bullish FVG spans 100 to 110; its CE is 105. A reaction near 105 is observed, not assumed.",
"i": "A CE is a reference price, not a mandatory touch or guaranteed reversal. Specify which array it belongs to."
},
"new-day-opening-gap": {
"e": "The gap between a defined new trading day's opening price and the prior day's closing price, using a specified session convention.",
"d": "The price interval between the previous trading day's close and the new day's open.",
"x": "Bullish: price opens above the prior close, creating an upward NDOG that may act as a reference/support. Bearish: price opens below the prior close, creating a downward gap that may act as resistance.",
"r": "Choose the instrument's daily session boundary; compare prior session close with new session open; mark the gap.",
"p": "A futures contract opens the new session above the prior close; mark the NDOG and observe whether price fills it or respects it.",
"i": "Forex/CFD/crypto session definitions differ. Some markets trade nearly continuously, so gaps may be small or absent. Page 9"
},
"new-week-opening-gap": {
"e": "The gap between the prior week's close and the new week's open, commonly watched in markets with a weekend closure.",
"d": "The interval between the last traded price of the prior week and the first price of the new week.",
"x": "Bullish: a gap up creates an NWOG below price that may act as support. Bearish: a gap down creates an NWOG above price that may act as resistance.",
"r": "Mark Friday close and Sunday/Monday reopen according to the instrument's trading schedule.",
"p": "A futures market reopens above Friday's close; the NWOG is monitored as a possible retracement area.",
"i": "Not all instruments have a meaningful weekend gap. Verify contract roll and session settings."
},
"displacement": {
"e": "A forceful, directional repricing move that shows clear momentum and may break structure or create an imbalance.",
"d": "A strong expansion candle or sequence with relatively large bodies, decisive closes and limited overlap compared with nearby price action.",
"x": "Bullish: strong upward candles close through a prior swing high and may leave a bullish FVG. Bearish: strong downward candles close through a prior swing low and may leave a bearish FVG.",
"r": "Compare candle bodies/range with recent bars; look for decisive close through a meaningful level and possible FVG creation.",
"p": "Following a low sweep, a wide bullish candle closes above an internal high and leaves an FVG; this supports a bullish shift hypothesis.",
"i": "There is no universal numeric threshold for displacement. Large candles during news can be volatile and unreliable."
},
"rebalanced-price-range": {
"e": "A term used for a range or imbalance area that has been revisited and partially or fully traversed to address prior inefficient delivery; usage varies.",
"d": "A previously inefficient price interval that price has returned through sufficiently to be considered rebalanced under a chosen rule.",
"x": "Bullish: a downward retracement rebalances a prior bullish leg, then price resumes higher. Bearish: an upward retracement rebalances a bearish leg, then price resumes lower.",
"r": "Identify the original imbalance/leg and state the completion rule (touch, midpoint, or full traversal) before evaluating it.",
"p": "Price retraces through the midpoint of a bullish imbalance; the trader records the area as partially rebalanced and waits for a bullish response.",
"i": "This label is less standardized than FVG/BPR. Do not treat it as a universally defined standalone PD array."
},
"implied-fair-value-gap": {
"e": "A less consistently standardized term used for an inferred inefficiency or a gap-like reference when a conventional FVG is not clearly present.",
"d": "An implied price-delivery inefficiency inferred from candle structure; exact construction rules vary by educator.",
"x": "Bullish: an inferred inefficiency during upward delivery may be watched for support on retracement. Bearish: the inverse may be watched for resistance.",
"r": "Use only after adopting a specific published rule set; document candle boundaries and what qualifies as the implied gap.",
"p": "If a teaching model defines an implied gap between specified candle bodies, mark that exact interval and test its response rather than improvising.",
"i": "The term is not uniformly defined across ICT teaching sources. This guide cannot claim one universal formula; verify the exact lesson/model. Page 10"
},
"liquidity-imbalance": {
"e": "A descriptive term for one-sided or uneven price delivery where price moves quickly with limited opposing trade/overlap.",
"d": "A directional imbalance in price movement; it may overlap conceptually with FVGs, volume imbalances or liquidity voids depending on usage.",
"x": "Bullish: aggressive buying creates upward imbalance and later retracement may find support. Bearish: aggressive selling creates downward imbalance and later retracement may find resistance.",
"r": "Look for fast directional candles and limited overlap; specify whether you mean a candle-body VI, three-candle FVG or broader void.",
"p": "Mark the fast bearish leg and distinguish its FVG from the broader low-overlap region before planning a retracement trade.",
"i": "Broad label with variable usage. Always state the exact observable rule to avoid mixing different concepts."
},
"order-block": {
"e": "A candle or price range associated with the origin of a meaningful displacement move that breaks structure or changes delivery.",
"d": "Common ICT convention: bullish OB is the last down-close candle before bullish displacement; bearish OB is the last up-close candle before bearish displacement.",
"x": "Bullish: last bearish candle before an impulsive break above a swing high; price retraces into its range and reacts. Bearish: last bullish candle before a strong break lower; retest may reject.",
"r": "Find displacement first, identify the relevant final opposing candle before it, mark its range using a consistent body/wick convention, and check structure/context.",
"p": "After SSL is swept, price rallies through an internal high leaving an FVG; mark the last down-close candle before the rally as a candidate bullish OB.",
"i": "Not every opposite-colour candle is an OB. Candle selection, range boundaries and mitigation rules vary; the zone can fail."
},
"breaker-block": {
"e": "A failed order block that is later approached from the opposite side and may act as a support/resistance reference.",
"d": "An OB whose expected reaction fails; after price trades through it, the zone may invert its role.",
"x": "Bullish: a bearish OB is broken upward and later supports a pullback. Bearish: a bullish OB is broken downward and later resists a rally.",
"r": "Identify the original OB; observe decisive violation; then watch for a retest from the opposite side and evidence of rejection.",
"p": "A bullish OB fails as price closes below it; on a rally back into the zone, price rejects, forming a candidate bearish breaker.",
"i": "A broken OB is not automatically a high-quality breaker. Define the invalidation and retest criteria. Page 11"
},
"mitigation-block": {
"e": "A price-action reference associated with a prior swing/failed push where price returns to mitigate opposing orders before continuing; definitions vary by ICT lesson.",
"d": "A block identified around the candle/price area associated with a failed attempt to continue beyond a swing, followed by a structural response.",
"x": "Bullish: after a lower low fails to extend and price breaks an intervening high, the relevant bullish mitigation area may support a retracement. Bearish: a higher high fails and price breaks a low; the mitigation area may resist a retest.",
"r": "Map the swing failure and subsequent structure break; use the exact candle-selection convention from the lesson being followed.",
"p": "Price makes a marginal lower low, then displaces above an internal high; identify the relevant bearish candle area as a candidate bullish mitigation block.",
"i": "ICT educators use differing descriptions. Do not conflate it automatically with an OB or breaker; verify exact model rules."
},
"rejection-block": {
"e": "A price zone associated with a pronounced rejection wick at a swing extreme, often used to identify where price rejected higher/lower prices.",
"d": "A candle's wick-extreme region and associated body boundary used as a reaction reference; exact drawing convention varies.",
"x": "Bullish: a long lower wick rejects lower prices; a later revisit may hold as support. Bearish: a long upper wick rejects higher prices; a revisit may act as resistance.",
"r": "Find a clear rejection wick at a meaningful high/low; mark the wick/body area according to the chosen rule and seek context/confirmation.",
"p": "At a prior low, a candle forms a long lower wick and closes strongly; the wick zone is marked as a potential bullish rejection block.",
"i": "A wick alone is not proof of institutional activity. Rejection-block boundaries are not uniformly standardized."
},
"propulsion-block": {
"e": "A specialized block concept used to describe a price area involved in a strong continuation or propulsion move; exact rules are lesson-dependent.",
"d": "A block identified within an impulsive move that is expected to provide a reference on a later retracement; definitions differ across materials.",
"x": "Bullish: an identified bullish propulsion area holds during a pullback before another expansion higher. Bearish: a bearish propulsion area caps a retracement before continuation lower.",
"r": "Use the specific ICT lesson's candle and structure criteria; mark the originating area and require directional context.",
"p": "In a bullish trend, identify the block associated with a decisive continuation break; watch its retest for a possible long setup.",
"i": "This is a specialized, less consistently documented label. Avoid inventing a universal candle formula. Page 12"
},
"hidden-order-block": {
"e": "A less universally standardized label for an order-block-like reference that is not the obvious final opposing candle or is nested within a larger structure.",
"d": "An OB identified through a particular educator's refinement rule; there is no single universally accepted definition.",
"x": "Bullish: a smaller hidden bullish block within a larger up-leg supports a retracement. Bearish: a nested bearish block caps a rally.",
"r": "Apply the exact source-specific selection rule; record timeframe, candle boundaries and the structural event that validates it.",
"p": "On a 1-minute chart inside a 15-minute bullish OB, a smaller candle cluster precedes a micro break; it may be marked only if the chosen method defines it.",
"i": "Treat as advanced/source-dependent terminology. Do not label any small candle inside an OB as hidden OB without rules."
},
"premium-discount-array": {
"e": "A broad ICT term for price-delivery reference tools used to frame where price may react within a dealing range, often relative to premium or discount.",
"d": "A named price reference/zone such as an FVG, OB, breaker, mitigation or other array, evaluated in relation to a dealing range.",
"x": "Bullish: seek bullish arrays in discount for long ideas. Bearish: seek bearish arrays in premium for short ideas.",
"r": "Define the dealing range and equilibrium; list relevant arrays within it; prioritize those aligned with bias, liquidity and structure.",
"p": "With a bullish daily range, mark a discount bullish OB and FVG; wait for price to reach the zone and show a lower-timeframe trigger.",
"i": "A PD array is not one single pattern. The checklist's 82 items include many concepts that are not themselves PD arrays."
},
"premium-array": {
"e": "A PD array located in the upper half of a defined dealing range, where ICT traders often look for bearish references.",
"d": "A price-delivery reference above the range's 50% equilibrium, measured from its selected low to high.",
"x": "Bullish: price can trade through a premium array and continue higher. Bearish: price rejects a premium bearish OB/FVG and moves lower.",
"r": "Define the range, calculate its midpoint, and identify arrays above equilibrium.",
"p": "After price rallies into a premium bearish FVG near a prior high, wait for rejection and a bearish shift before considering a short.",
"i": "Premium means relatively expensive within the selected range, not objectively overvalued. A strong trend can remain in premium."
},
"discount-array": {
"e": "A PD array located in the lower half of a defined dealing range, often used as a location for bullish references.",
"d": "A price-delivery reference below the range's 50% equilibrium.",
"x": "Bullish: price reacts from a discount bullish OB/FVG and expands higher. Bearish: price trades through the discount array and continues lower.",
"r": "Define the range and equilibrium; mark arrays below the midpoint; seek alignment with bullish context.",
"p": "After a sell-side sweep, price retraces into a discount bullish FVG; wait for a bullish structure trigger.",
"i": "Discount is relative to the chosen range, not proof that price is cheap in fundamental terms. Page 13"
},
"optimal-trade-entry": {
"e": "A Fibonacci retracement zone used by ICT traders to frame a deep pullback within a directional price leg.",
"d": "Commonly the 62%–79% retracement area, with 70.5% often marked as a central reference; exact levels can vary slightly by convention.",
"x": "Bullish: measure an impulse from swing low to swing high; a pullback into OTE in discount may offer a long location. Bearish: measure high to low; a rally into OTE in premium may offer a short location.",
"r": "Choose a clear impulse leg; apply Fibonacci in the correct direction; mark approximately 0.62–0.79 and assess confluence with arrays/liquidity.",
"p": "After bullish displacement, draw Fib low-to-high; if price retraces into 62–79% near a bullish OB, wait for confirmation.",
"i": "OTE is a location framework, not an entry signal by itself. The impulse leg selection is subjective and must be consistent."
},
"mean-threshold": {
"e": "A midpoint reference used in some ICT teaching contexts for a selected price range or array; terminology can overlap with equilibrium/CE.",
"d": "The 50% level of the specific candle, range or array defined by the model being used.",
"x": "Bullish: price holds above the relevant midpoint after a retracement. Bearish: price rejects below/at the midpoint on a rally.",
"r": "State exactly which range or candle is being measured, then calculate its 50% level.",
"p": "For an OB spanning 200–210, mark 205 as the mean threshold and observe whether price respects it.",
"i": "MT is not always used identically to equilibrium or CE. Specify the measured object and source convention."
},
"return-to-order-block": {
"e": "A retracement back into a previously identified OB after price has moved away from it.",
"d": "A revisit of the defined OB range; the return may be for mitigation, continuation or failure.",
"x": "Bullish: price returns to a bullish OB after displacement and then rallies. Bearish: price returns to a bearish OB and then declines.",
"r": "Validate the OB first; wait for price to revisit its range; assess reaction, structure and invalidation.",
"p": "After a bullish break, price retraces into the last down-close candle range and forms a lower-timeframe bullish shift.",
"i": "A return does not guarantee mitigation or continuation. Avoid blind limit orders without a tested plan."
},
"return-to-breaker": {
"e": "A retest of a failed OB after it has inverted role, often used as a potential entry location.",
"d": "Price revisits a confirmed breaker zone from the side opposite its original OB role.",
"x": "Bullish: price breaks above a bearish OB, then retests it from above and holds. Bearish: price breaks below a bullish OB, retests from below and rejects.",
"r": "Identify original OB and its failure; confirm the break; wait for retest and directional response.",
"p": "A bullish OB fails after price closes below; later a rally into the former block is rejected, supporting a short hypothesis.",
"i": "A retest may not occur; a zone may be crossed again. Define stop/invalidation before entry. Page 14"
},
"unicorn-model": {
"e": "An ICT-style confluence model combining a breaker block and a fair value gap in the same general price area.",
"d": "A setup where a breaker and FVG overlap or align, used as a refined retracement entry reference.",
"x": "Bullish: a bearish breaker is reclaimed and aligns with a bullish FVG; a pullback holds and price expands higher. Bearish: a bullish breaker fails and aligns with a bearish FVG; retest rejects lower.",
"r": "Identify the liquidity event and structure shift; mark the breaker and FVG; check that their zones overlap/align; plan entry and invalidation.",
"p": "Price sweeps SSL, displaces upward, breaks a bearish OB and leaves bullish FVG; the overlap on retest is a candidate bullish Unicorn.",
"i": "Exact entry/boundary rules vary by lesson and trader. The name does not imply a guaranteed edge."
},
"single-candle-order-block": {
"e": "A single-candle pattern used by some ICT/SMC educators as a compact order-block reference.",
"d": "A one-candle zone selected by a specific candle condition; the term's precise rules are not universal across ICT materials.",
"x": "Bullish: a defined bullish SCOB forms near a low and price later respects it. Bearish: a defined bearish SCOB forms near a high and price rejects it.",
"r": "Use the originating educator's exact candle criteria, including close, wick and neighboring-candle conditions; mark only qualifying candles.",
"p": "A trader's chosen SCOB rules identify one candle after a sell-side raid; they wait for a retest and bullish confirmation.",
"i": "SCOB is not as standardized as FVG or OB. Do not assume every single candle is an SCOB."
},
"market-structure-shift": {
"e": "A meaningful change in short-term price delivery, commonly marked by displacement through a relevant opposing swing after liquidity is taken.",
"d": "A break of a prior internal swing in the opposite direction of the immediately preceding move, often accompanied by displacement.",
"x": "Bullish: after a low sweep, price breaks a recent lower high with strong upward displacement. Bearish: after a high sweep, price breaks a recent higher low with strong downward displacement.",
"r": "Identify the prevailing swing sequence; mark liquidity event; require a decisive break of a relevant swing, preferably with displacement; define timeframe.",
"p": "After PDL is swept, a 5-minute candle closes above the last lower high and leaves an FVG; this is a candidate bullish MSS.",
"i": "MSS and CHoCH are sometimes used similarly, but educators may distinguish them. Avoid calling every minor break an MSS. Page 15"
},
"break-of-structure": {
"e": "A break of a significant swing level in the direction of the existing trend, often interpreted as continuation.",
"d": "A decisive move beyond a prior structural high in an uptrend or low in a downtrend.",
"x": "Bullish: price makes HH and breaks above the previous swing high. Bearish: price makes LL and breaks below the previous swing low.",
"r": "Define swing points consistently; look for a close/acceptance beyond the relevant swing, not merely an insignificant wick.",
"p": "In an uptrend, price pulls back to HL then closes above the prior HH: bullish BOS.",
"i": "Some traders use wick breaks; others require candle closes. State your rule and timeframe."
},
"change-of-character": {
"e": "An early warning that price behaviour may be changing, usually when price breaks a swing against the prior short-term trend.",
"d": "A break of a relevant swing point that disrupts the prior sequence of HH/HL or LH/LL.",
"x": "Bullish: in a downtrend, price breaks above a prior lower high. Bearish: in an uptrend, price breaks below a prior higher low.",
"r": "Map the active swing sequence; wait for a break against that sequence; use displacement/context to assess significance.",
"p": "After a bearish sequence, price sweeps a low then breaks the most recent lower high: possible bullish CHoCH.",
"i": "CHoCH is not confirmation of a durable trend reversal by itself. Terminology overlaps with MSS in many communities."
},
"change-in-state-of-delivery": {
"e": "A change in the way price is delivered, often identified through a shift in candle closes across a key opening/closing reference.",
"d": "A directional delivery shift defined by a specific sequence of candle bodies/closes; exact implementation varies by ICT lesson.",
"x": "Bullish: price shifts from bearish delivery to bullish closes, often reclaiming a key down-close candle's open. Bearish: price shifts from bullish delivery to bearish closes, often losing a key up-close candle's open.",
"r": "Identify the candle/sequence whose delivery is being monitored; apply the source-specific close/open rule and require follow-through.",
"p": "After a sell-side raid, bullish candles reclaim the open of a key bearish candle and continue higher; this may satisfy a bullish CISD rule.",
"i": "CISD has model-specific definitions. Do not substitute a generic trendline break or any green/red candle change."
},
"higher-high": {
"e": "A swing high that is above the previous relevant swing high.",
"d": "A confirmed high whose price exceeds the prior selected structural high.",
"x": "Bullish: successive HHs show upward structure. Bearish: a brief HH may be a liquidity raid before reversal lower.",
"r": "Choose comparable swing highs on one timeframe; confirm the pivot using a consistent swing rule.",
"p": "Price forms a high at 105 after the prior swing high at 102; it is a HH if both are valid pivots.",
"i": "A HH alone does not establish a complete uptrend; examine intervening lows and timeframe. Page 16"
},
"higher-low": {
"e": "A swing low that forms above the previous relevant swing low.",
"d": "A confirmed pivot low at a higher price than the preceding selected swing low.",
"x": "Bullish: HL holds and price later makes a HH. Bearish: price breaks below the HL, warning of possible trend change.",
"r": "Compare confirmed swing lows on the same timeframe and identify whether price respects the prior low.",
"p": "Price pulls back from 110 to 105 while the previous low was 100; 105 is a HL if it forms a valid pivot.",
"i": "A low may be revised as new candles form. Do not classify an unfinished pivot too early."
},
"lower-high": {
"e": "A swing high below the previous relevant swing high.",
"d": "A confirmed pivot high at a lower price than the prior selected swing high.",
"x": "Bearish: LH followed by LL supports downtrend structure. Bullish: price breaks above the LH, potentially signaling a shift.",
"r": "Compare confirmed pivot highs on the same timeframe; check the subsequent low and break.",
"p": "Price rallies to 95 after a prior high of 100, then turns down; 95 is a LH if it is a valid pivot.",
"i": "A single LH can occur inside a larger uptrend. Use higher-timeframe context."
},
"lower-low": {
"e": "A swing low below the previous relevant swing low.",
"d": "A confirmed pivot low below the preceding selected structural low.",
"x": "Bearish: successive LLs show downward structure. Bullish: a marginal LL that quickly reclaims the old low may be a sell-side sweep.",
"r": "Compare confirmed swing lows and assess whether price accepts below the prior low.",
"p": "Price breaks 90 and forms a low at 87 after a prior low at 90; this is a LL if confirmed.",
"i": "A LL may represent continuation or a liquidity raid; the reaction and context determine interpretation."
},
"short-term-high": {
"e": "A local high within a broader price sequence, used as a near-term structural or liquidity reference.",
"d": "A pivot high defined by the short-term swing/fractal rule used in the chosen ICT framework.",
"x": "Bullish: price breaks an STH during upward displacement. Bearish: price sweeps an STH and reverses.",
"r": "Apply a consistent pivot rule; identify the nearby local high and distinguish it from intermediate/long-term pivots.",
"p": "On a 5-minute chart, a small pivot high between two lower highs is marked as STH and later broken by displacement.",
"i": "Exact STH/IT/LTH fractal rules should be taken from the relevant ICT lesson; chart settings can change pivots."
},
"short-term-low": {
"e": "A local low within a broader price sequence, used as a near-term structure/liquidity reference.",
"d": "A pivot low classified as short-term under the chosen swing/fractal rule.",
"x": "Bullish: price sweeps an STL then shifts higher. Bearish: price breaks below an STL and continues lower.",
"r": "Use the same pivot/fractal rule as for STH; mark only confirmed local lows.",
"p": "A 5-minute local low is taken during a session, then price reclaims it and breaks an STH.",
"i": "Do not confuse an unconfirmed intrabar low with a completed pivot. Page 17"
},
"intermediate-term-high": {
"e": "A more significant high formed from the relationship of surrounding short-term highs in a multi-swing hierarchy.",
"d": "A pivot high classified at the intermediate level by ICT's nested swing/fractal convention.",
"x": "Bullish: price breaks ITH, supporting upside expansion. Bearish: ITH is swept and price reverses lower.",
"r": "Identify the surrounding short-term pivots and apply the intermediate-term fractal rule taught for the relevant timeframe.",
"p": "A prominent 1-hour high composed of the appropriate short-term swing pattern is marked as ITH and used as BSL.",
"i": "The exact nested pivot rule is lesson-specific; do not invent a fixed number of candles."
},
"intermediate-term-low": {
"e": "A significant low in the intermediate swing hierarchy, more prominent than a short-term low.",
"d": "A pivot low classified by the intermediate-level ICT swing/fractal convention.",
"x": "Bullish: price raids ITL and reclaims it. Bearish: decisive break below ITL supports downside continuation.",
"r": "Use the intermediate fractal/pivot rule consistently; mark the low in relation to surrounding short-term lows.",
"p": "A 1-hour ITL below current price is marked as an external sell-side reference.",
"i": "Its classification depends on the swing hierarchy and selected timeframe."
},
"long-term-high": {
"e": "A major high in the nested swing hierarchy, generally more significant than intermediate-term highs.",
"d": "A pivot high classified as long-term under the specific ICT fractal/swing convention.",
"x": "Bullish: price breaks LTH and expands into new highs. Bearish: price raids LTH and reverses sharply.",
"r": "Apply the full nested swing rule from the source material; use a higher timeframe to avoid overclassifying minor pivots.",
"p": "A multi-day high confirmed by the chosen long-term pivot structure is marked as a major BSL target.",
"i": "LTH is a structural classification, not a guarantee of major resistance."
},
"long-term-low": {
"e": "A major low in the long-term swing hierarchy and a broad downside liquidity reference.",
"d": "A pivot low classified as long-term by the chosen ICT nested swing convention.",
"x": "Bullish: price sweeps LTL and reclaims it, potentially initiating a major rally. Bearish: price breaks and accepts below LTL.",
"r": "Use the full nested pivot rule and compare with surrounding intermediate-term lows.",
"p": "A weekly LTL is marked beneath the market; traders monitor a raid and subsequent weekly structure response.",
"i": "Long-term classification is timeframe- and rule-dependent. Page 18"
},
"dealing-range": {
"e": "A defined high-to-low price range used to measure premium, discount, equilibrium and internal/external liquidity.",
"d": "The selected swing high and swing low that bound the range under analysis.",
"x": "Bullish: price trades into the lower half of the range and seeks upside liquidity. Bearish: price trades into the upper half and seeks downside liquidity.",
"r": "Select meaningful range boundaries; keep them fixed until the model's range-reset condition occurs; mark midpoint.",
"p": "Use the latest clear daily swing low and high to map the current dealing range, then locate arrays relative to EQ.",
"i": "Different range choices produce different premium/discount readings. Explain why the boundaries were selected."
},
"equilibrium": {
"e": "The 50% midpoint of a defined dealing range, separating premium from discount.",
"d": "EQ = (range high + range low) / 2.",
"x": "Bullish: price below EQ is in discount and may be considered for long setups. Bearish: price above EQ is in premium and may be considered for shorts.",
"r": "Mark the selected range high/low and calculate the midpoint; reassess only when the range changes.",
"p": "For a 100–120 range, EQ is 110; prices below 110 are discount and above 110 premium.",
"i": "EQ is a relative midpoint, not a fair-value estimate or guaranteed reversal level."
},
"premium": {
"e": "The upper half of a defined dealing range, often considered a more favourable location for bearish setups.",
"d": "The area above the 50% equilibrium of the selected range.",
"x": "Bullish: price can remain in premium while trending higher. Bearish: a premium bearish array may offer a short location with confirmation.",
"r": "Define range; calculate EQ; classify prices above it as premium.",
"p": "With range 100–120, price at 116 is premium; a bearish FVG there is monitored for rejection.",
"i": "Premium does not mean price must fall. Strong trends can expand higher through premium."
},
"discount": {
"e": "The lower half of a defined dealing range, often considered a more favourable location for bullish setups.",
"d": "The area below the 50% equilibrium of the selected range.",
"x": "Bullish: a discount bullish OB/FVG may support a long after confirmation. Bearish: price can continue lower through discount.",
"r": "Define range; calculate EQ; classify prices below it as discount.",
"p": "With range 100–120, price at 104 is discount; after SSL sweep, a bullish FVG may be monitored.",
"i": "Discount does not mean price is objectively cheap or must rise. Page 19"
},
"power-of-three": {
"e": "A model describing a directional price cycle through accumulation, manipulation and distribution.",
"d": "A three-phase framework: consolidation/positioning, a deceptive move through liquidity, then expansion in the intended direction.",
"x": "Bullish: price ranges, dips below the range (manipulation), then expands higher. Bearish: price ranges, spikes above it, then expands lower.",
"r": "Mark the relevant range and session/day open; look for a false move through one side followed by displacement toward the opposite side.",
"p": "During a bullish daily narrative, price trades below the opening range early, reclaims it, then expands toward BSL.",
"i": "PO3 is a model lens, not a fixed daily sequence. Not every day has all three clean phases."
},
"accumulation-manipulation-distribution": {
"e": "A market-cycle framework describing consolidation, a liquidity-taking move against the intended direction, and subsequent directional expansion.",
"d": "Accumulation = range building; manipulation = false break/raid; distribution = expansion away from the range.",
"x": "Bullish: accumulation, downside manipulation below range low, then distribution upward. Bearish: accumulation, upside manipulation above range high, then distribution downward.",
"r": "Identify a defined range; observe which side is raided; seek confirmation that price shifts and expands toward the opposite side.",
"p": "Asian range forms; London runs below its low; New York expands upward toward the Asian high and external BSL.",
"i": "AMD and PO3 overlap heavily in common teaching. Avoid treating every range breakout as manipulation."
},
"market-maker-buy-model": {
"e": "A directional model describing a sequence in which price takes sell-side liquidity and then delivers higher toward buy-side liquidity.",
"d": "A bullish price-delivery narrative built around downside liquidity raid, bullish shift/displacement and expansion.",
"x": "Bullish: price raids lows, forms bullish MSS/FVG and rallies to highs. Bearish alternative: if lows break and price accepts lower, the buy model is invalidated.",
"r": "Map higher-timeframe bullish context, downside liquidity, confirmation shift and upside objective; define invalidation beneath the raid low.",
"p": "Price sweeps PDL during a session, displaces above an internal high, retraces to bullish FVG and targets PDH.",
"i": "Model sequence and exact entry rules vary. Do not assume a market maker literally engineered the move."
},
"market-maker-sell-model": {
"e": "A bearish counterpart to the buy model, framing a raid of buy-side liquidity followed by delivery lower.",
"d": "A bearish price-delivery narrative involving upside liquidity raid, bearish shift/displacement and expansion toward sell-side liquidity.",
"x": "Bearish: price raids highs, breaks an internal low and declines toward SSL. Bullish alternative: acceptance above the raided high invalidates the short thesis.",
"r": "Map bearish higher-timeframe context, upside liquidity, bearish confirmation and downside objective; define invalidation above the raid high.",
"p": "Price sweeps the Asian high, displaces below a short-term low, retraces into a bearish FVG and targets PDL.",
"i": "Use as a scenario framework, not a guaranteed sequence or evidence of literal market-maker intent. Page 20"
},
"market-maker-model": {
"e": "A broader ICT model family describing price delivery through liquidity runs, structure changes and expansion; often taught in buy and sell variants.",
"d": "A model-based sequence combining liquidity, dealing ranges, displacement and PD arrays to frame a directional trade.",
"x": "Bullish MMXM: downside liquidity is taken, bullish delivery begins and price seeks higher liquidity. Bearish MMXM: upside liquidity is taken, bearish delivery begins and price seeks lower liquidity.",
"r": "Follow the exact MMXM lesson/template being studied; mark higher-timeframe bias, liquidity event, structure shift, array entry and objective.",
"p": "Build a bullish scenario from weekly discount, daily SSL raid, intraday MSS and bullish FVG retracement.",
"i": "MMXM is a model label with variations across lessons and community explanations. Do not mix different templates."
},
"judas-swing": {
"e": "A false or deceptive initial move, often discussed around a session open, that runs liquidity opposite the later directional move.",
"d": "An early-session excursion beyond a reference high/low followed by a reversal and directional delivery.",
"x": "Bullish: early move dips below Asian/session low then reverses upward. Bearish: early move spikes above Asian/session high then reverses downward.",
"r": "Mark session range and likely liquidity; watch early-session raid; require a clear reclaim/structure shift before considering the opposite direction.",
"p": "London opens, price briefly breaks the Asian low, then rallies with displacement toward the Asian high.",
"i": "Not every opening move is a Judas Swing. Session timing and directional context matter; avoid hindsight labeling."
},
"turtle-soup": {
"e": "A false-breakout reversal setup based on taking a prior high/low and then moving back inside the old range.",
"d": "A price move beyond a previous extreme that fails to sustain and reverses back through the level; related to classic false-breakout ideas.",
"x": "Bullish: price breaks a prior low, quickly reclaims it and moves higher. Bearish: price breaks a prior high, falls back below and moves lower.",
"r": "Identify a clearly defined prior high/low; wait for a break and failed continuation/reclaim; define stop beyond the extreme and target opposite liquidity.",
"p": "Price trades below yesterday's low, closes back above it, then breaks a short-term high; possible bullish Turtle Soup.",
"i": "Do not confuse a genuine breakout with a failed one prematurely. This is not uniquely an ICT invention. Page 21"
},
"ict-silver-bullet": {
"e": "A time-based ICT intraday setup that seeks a liquidity/structure event and FVG entry during specified one-hour windows.",
"d": "A model commonly associated with 10:00–11:00 a.m. New York time, with related windows taught for London and afternoon sessions in some materials.",
"x": "Bullish: during the defined window, price sweeps SSL, shifts bullish and retraces into a bullish FVG. Bearish: price sweeps BSL, shifts bearish and retraces into a bearish FVG.",
"r": "Use New York local time and correct DST; mark liquidity; wait for displacement/MSS and FVG formed within the model window; manage defined risk.",
"p": "Between 10 and 11 a.m. New York, price raids a short-term low, breaks a high with displacement, then retraces into bullish FVG.",
"i": "The time window and model details must be checked against the particular ICT lesson. A window alone is not a signal."
},
"ict-2022-model": {
"e": "A commonly taught intraday framework from ICT's 2022 mentorship, combining liquidity raid, market structure shift and FVG retracement.",
"d": "A sequence often summarized as: establish bias, wait for liquidity to be taken, confirm MSS/displacement, then use FVG retracement for entry.",
"x": "Bullish: sell-side liquidity is swept, bullish MSS forms and price retraces to bullish FVG before targeting BSL. Bearish: buy-side liquidity is swept, bearish MSS forms and retracement into bearish FVG precedes SSL target.",
"r": "Set higher-timeframe bias and target; identify relevant liquidity; wait for raid; require structural shift; mark FVG; plan stop beyond logical invalidation.",
"p": "On a bullish day, price sweeps PDL, breaks a 5-minute lower high with displacement, returns to FVG and targets PDH.",
"i": "This is a framework, not a promise of profitability. Exact timeframes and entry rules should match the original lesson being followed."
},
"optimal-trade-entry-model": {
"e": "A trade model using the OTE retracement zone as one component of a larger directional setup.",
"d": "A setup in which a selected impulse retraces into approximately 62%–79%, ideally aligning with liquidity, structure and a PD array.",
"x": "Bullish: after bullish displacement, retracement into OTE in discount aligns with bullish OB/FVG. Bearish: after bearish displacement, rally into OTE in premium aligns with bearish array.",
"r": "Select a valid impulse leg; draw Fibonacci; check 62–79% zone, range half, liquidity and confirmation; set invalidation beyond structure.",
"p": "After a bullish MSS, draw from swing low to high; a pullback to 70.5% near a bullish FVG becomes a candidate entry location.",
"i": "OTE is not a separate guaranteed model and should not be confused with any single fixed-price entry. Page 22"
},
"institutional-order-flow": {
"e": "An ICT phrase for the broader directional pattern of price delivery and structural movement attributed to large-participant activity.",
"d": "A directional sequence of swings, displacement, liquidity objectives and PD-array interactions used to infer market bias.",
"x": "Bullish IOF: repeated HH/HL and bullish displacement toward BSL. Bearish IOF: repeated LH/LL and bearish displacement toward SSL.",
"r": "Analyze higher-timeframe swings, structure breaks, liquidity draws and whether bullish/bearish arrays are respected.",
"p": "Daily chart shows higher highs and higher lows; intraday pullbacks into discount arrays are evaluated for continuation longs.",
"i": "Actual institutional orders are not directly visible from a retail chart. IOF is an interpretive framework, not order-flow data."
},
"institutional-order-flow-entry-drill": {
"e": "A named entry exercise/model label used in some ICT learning materials; public definitions and exact rules are not consistently standardized.",
"d": "An entry drill intended to train execution in alignment with the selected institutional-order-flow narrative; exact sequence must come from its source lesson.",
"x": "Bullish: a drill may practice buying a pullback after bullish order flow and a defined trigger. Bearish: it may practice selling a retracement after bearish order flow and a defined trigger.",
"r": "Use the exact lesson's setup checklist, timeframe, trigger, stop and target. Do not infer rules from the acronym alone.",
"p": "A learner records a replay example only after identifying higher-timeframe direction, a valid liquidity event and the lesson's specified entry trigger.",
"i": "This term is source-dependent. The checklist does not provide enough detail to state a universal IOFED formula; consult the original lesson."
},
"asian-range": {
"e": "The high-low range formed during a chosen Asian trading-session window, often used as an intraday liquidity reference.",
"d": "The highest and lowest prices traded during a defined Asian session interval.",
"x": "Bullish: price runs below the Asian low then rallies through the range. Bearish: price runs above the Asian high then declines through the range.",
"r": "Choose and record the exact session times in the instrument's relevant time zone; plot high/low after the range completes.",
"p": "Mark Asian high/low before London; observe whether London raids one side and delivers toward the other.",
"i": "There is no single universal Asian-session window for all instruments. Account for DST and broker time. Page 23"
},
"london-kill-zone": {
"e": "A time window emphasized in ICT teaching for potential London-session trading opportunities.",
"d": "A defined period around the London open; commonly cited ICT charts use approximately 2:00–5:00 a.m. New York time, but lesson conventions vary.",
"x": "Bullish: during the window, price sweeps SSL and shifts higher. Bearish: it raids BSL and shifts lower.",
"r": "Convert the intended New York-time window correctly for the current DST regime; mark session liquidity and wait for a model trigger.",
"p": "Before London, mark Asian range; during the chosen kill zone, wait for a raid and MSS rather than entering simply because the clock matches.",
"i": "Kill-zone times are windows, not signals. Confirm exact times from the ICT lesson and account for daylight-saving changes."
},
"new-york-kill-zone": {
"e": "A time window emphasized in ICT teaching for potential New York-session setups.",
"d": "A defined New York morning period; commonly cited window is about 7:00–10:00 a.m. New York time, with model-specific variations.",
"x": "Bullish: price raids a morning low and displaces higher. Bearish: price raids a morning high and displaces lower.",
"r": "Use New York local time; check DST; identify scheduled economic releases and the model's precise window.",
"p": "Mark overnight high/low; during the NY window, wait for a liquidity run and structure confirmation before considering an entry.",
"i": "Different ICT models use different New York windows, including the Silver Bullet hour. Avoid treating all windows as interchangeable."
},
"london-close": {
"e": "A time-of-day reference around the London market close, sometimes used to frame afternoon reversals or profit-taking.",
"d": "The London closing period; exact clock time depends on the definition and daylight-saving calendar.",
"x": "Bullish: after a London-session decline, price may reverse upward near the close. Bearish: after a rally, price may turn lower.",
"r": "Mark London-session high/low and use a clearly defined local-time window; assess whether the day's objective has already been reached.",
"p": "After London has delivered toward SSL, price stabilizes and reverses near the chosen London-close window; monitor for confirmation.",
"i": "London close is not a fixed reversal event. Time conversion and market-specific conventions matter."
},
"ict-macros": {
"e": "Short, recurring time windows emphasized in ICT teaching during which algorithmic price movements are said to be more likely.",
"d": "Specific intraday clock intervals used as timing filters; exact macro windows depend on the ICT lesson and instrument.",
"x": "Bullish: during a defined macro, price sweeps a low and expands upward. Bearish: it sweeps a high and expands downward.",
"r": "Obtain the exact macro schedule from the relevant ICT source; convert to New York time/DST; only use as a timing filter alongside price context.",
"p": "A trader marks a published macro interval, observes a liquidity raid and waits for displacement/FVG confirmation.",
"i": "Macro times are not independently predictive and vary by teaching material. Never invent a schedule or trade solely because a macro begins. Page 24 Page 25"
}
};
const FIELDS=["Concept explanation","Definition","Trading chart examples","Bullish and bearish examples","Identification rules","Practical examples","Important notes"];
function slots(o){const k=CONTENT[o.slug],f=(t,b)=>`<div class="f"><b>${t}</b><p>${esc(b)}</p></div>`;
if(!k)return FIELDS.map(s=>`<div><b>${s}</b>Coming soon.</div>`).join("");
return f(FIELDS[0],k.e)+f(FIELDS[1],k.d)+`<div><b>${FIELDS[2]}</b>Coming soon.</div>`+f(FIELDS[3],k.x)+f(FIELDS[4],k.r)+f(FIELDS[5],k.p)+f(FIELDS[6],k.i)}

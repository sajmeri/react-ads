# react-ads

This package allows you to render DFP ads using React components.

## <Provider \/>

| Name                  | Type     | Default  | Description                                                                                                                                                                                                                                                                                                                                                                                       |
|-----------------------|----------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| prebid                | Function |          | A custom prebid initialization function.                                                                                                                                                                                                                                                                                                                                                          |
| chunkSize             | Number   |          | This will fetch ads in chunks of the specified number.                                                                                                                                                                                                                                                                                                                                            |
| networkId             | Number   |          | DFP network id.                                                                                                                                                                                                                                                                                                                                                                                   |
| adUnitPath            | String   |          | This will set The network Id for all of the ads. The,can overwrite this.                                                                                                                                                                                                                                                                                                                          |
| refreshDelay          | Number   |          | Time to wait before refreshing ads. This allows ads to be added to a queue beforebeing defined and refreshed. This multiple ads to be refreshed at the same time.                                                                                                                                                                                                                                 |
| setCentering          | Boolean  |          | Enables/disables centering of ads. This mode must be set before the service is enabled. Centering is disabled by default. In legacy gpt_mobile.js, centering is enabled by default.                                                                                                                                                                                                               |
| setTargeting          | Object   |          | Sets page level targeting for all slots. This targeting will apply to all slots.                                                                                                                                                                                                                                                                                                                  |
| prebidTimeout         | Number   |          | Prebid bids timeout.                                                                                                                                                                                                                                                                                                                                                                              |
| enableVideoAds        | Boolean  |          | Signals to GPT that video ads will be present on the page. This enables competitive exclusion constraints on display and video ads. If the video content is known, call setVideoContent in order to be able to use content exclusion for display ads.                                                                                                                                             |
| collapseEmptyDivs     | Boolean  |          | If you're using the asynchronous mode of Google Publisher Tags (GPT) and know that one or more ad slots on your page don't always get filled, you can instruct the browser to collapse empty divs by adding the collapseEmptyDivs(),method to your tags. This method may trigger a reflow of the content of your,page, so how you use it depends on how often you expect an ad slot to be,filled. |
| prebidFailsafeTimeout | Number   |          | Prebid bids timeout, in case the prebid timeout goes wrong.                                                                                                                                                                                                                                                                                                                                       |
 
## <Ad  \/>

___

| Name                    | Type                       | Default               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-------------------------|----------------------------|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                      | String                     |                       | Id that DFP will use to identify this ad. When not set it will create a default id.                                                                                                                                                                                                                                                                                                                                                                   |
| size                    | Array                      |                       | Defines the size of the GPT slot. This value will be passed to the googletag.defineSlot() fn.                                                                                                                                                                                                                                                                                                                                                         |
| lazy                    | Boolean                    |                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| style                   | Object                     |                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| lazyOffset              | Number                     |                       | Use a value > 0 to lazy load ads x pixels before they show in the window.                                                                                                                                                                                                                                                                                                                                                                             |
| className               | String                     |                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| priority                | Number                     |                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| targeting               | Object                     |                       | Sets a custom targeting parameter for this slot.                                                                                                                                                                                                                                                                                                                                                                                                      |
| adUnitPath              | String                     | Provider's unitPathId | This will set The network Id for this . This overwrites the value from the .                                                                                                                                                                                                                                                                                                                                                                          |
| bidderCode              | Function                   |                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| sizeMapping             | Array || [[Number,Number]] |                       | Define the the viewport size and the slots allowed to be rendered in the viewportSize.This value is an array so you can define multiple ads per viewport size.                                                                                                                                                                                                                                                                                        |
| onSlotOnLoad            | Function                   |                       | This event is fired when the creative's iframe fires its load event. When rendering rich media ads in sync rendering mode, no iframe is used so no SlotOnloadEvent will be fired.ex.                                                                                                                                                                                                                                                                  |
| outOfPageSlot           | Boolean                    |                       | When set to true it sets the ad as an out of page slot.                                                                                                                                                                                                                                                                                                                                                                                               |
| SetCollapseEmpty        | Boolean                    |                       | Sets whether the slot div should be hidden when there is no ad in the slot. This overrides the global,settings.                                                                                                                                                                                                                                                                                                                                       |
| onSlotRenderEnded       | Function                   |                       | This event is fired when the creative code is injected into a slot. This event will occur before the creative's resources are fetched, so the creative may not be visible yet. The event is fired by the service that rendered the slot. Example: To listen to companion ads, add a listener to the companion ads service, not the pubads service. Note: If you need to know when the creative hasfired its load event, consider the SlotOnloadEvent. |
| onImpressionViewable    | Function                   |                       | This event is fired when an impression becomes viewable, according to the ActiveView criteria.                                                                                                                                                                                                                                                                                                                                                        |
| onSlotVisibilityChanged | Function                   |                       | This event is fired whenever the on-screen percentage of an ad slot's area changes. The event is throttled and will not fire more often than once every 200ms.                                                                                                                                                                                                                                                                                        |


**sizeMapping**
```javascript
[ 
    // One Ad until infinity 
    { viewPort: [1500, 200], slots: [728, 90] }, 
    // Multiple Ads until browser width >= 1500px
    { viewPort: [1250, 200], slots: [[728, 90], [970, 250]] }, 
    // No Ads until browser width >= 1250px
    { viewPort: [0, 0], slots: [] },
]
```

**onSlotOnLoad**

```javascript
const onSlotLoadEvent = ({id, ref, ... e}) => ({
    console.log(`slot id is ${id}`);
}
```

**onSlotRenderEnded**

```javascript
const onSlotLoadEvent = ({id, ref, ...e}) => ({
    console.log(`slot ${id} rendered`);
}
```

**onImpressionViewable**

```javascript
const onSlotLoadEvent = ({id, ref, ...e}) => ({
    console.log(`Impression for slot with id ${id} served`);
}
```

**onSlotVisibilityChanged**

```javascript
const onSlotLoadEvent = ({id, ref, ...e}) => ({
    console.log(`Slot viewability is ${e} %`);
}
```

## DEVELOPMENT NOTES

### Ad Loading strategies
___

|  Infinite Scroll                           	                        |
|-----------------------------------------------------------------------|
| Define Slots                              	                        |
| googletag.pubads().enableSingleRequest(); 	                        |
| googletag.pubads().disableInitialLoad();  	                        |
| googletag.enableServices();               	                        |
| googletag.display(slotName); && googletag.pubads().refresh([slot]);   |

| Event-based ad requesting/rendering                                   |
|-----------------------------------------------------------------------|
| Define Slots                                                          |
| googletag.pubads().enableSingleRequest();                             |
| googletag.pubads().disableInitialLoad();                              |
| googletag.enableServices();                                           |
| googletag.display(slotName);                                          |
| googletag.pubads().refresh([slot]);                                   |

| Lazy loading                                                          |
|-----------------------------------------------------------------------|
| Define Slots                                                          |
| googletag.pubads().enableLazyLoad();                                  |
| googletag.enableServices();                                           |
| googletag.display(slotName);                                          |

**enableSingleRequest**

Enables single request mode for fetching multiple ads at the same time. This 
requires all pubads slots to be defined and added to the pubads service prior to 
enabling the service. Single request mode must be set before the service is 
enabled.

**disableInitialLoad**

Disables requests for ads on page load, but allows ads to be requested with a 
googletag.pubads().refresh() call. This should be set prior to enabling the 
service. Async mode must be used; otherwise it will be impossible to request ads
 using refresh.

**display**

Enables all GPT services that have been defined for ad slots on the page.
Instructs slot services to render the slot. Each ad slot should only be 
displayed once per page. All slots must be defined and have a service associated
with them before being displayed. The display call must not happen until the 
element is present in the DOM. The usual way to achieve that is to place it 
within a script block within the div element named in the method call. 
If single request architecture (SRA) is being used, all unfetched ad slots at the 
moment display is called will be fetched in a single instance of 
googletag.display(). To force an ad slot not to display, the entire div must be 
removed.

Infinite Scroll and event based ad requesting/rendering setups call the same 
functions. The only difference is that:

infinite scroll calls

```javascript
// Both fns get called.
googletag.display(slotName); && googletag.pubads().refresh([slot]); 
```

Event-based ad requesting/rendering

```javascript
// Ad gets fetched but not rendered.
googletag.display(slotName); 
```

```javascript
// Ad gets rendered.
googletag.display(slotName); 
```

### Initializing GPT

These are the only 2 ways to properly initialize the google tag manager.

| Define page-level settings 	|    Define Enable Display   	|
|:--------------------------	|:--------------------------	|
| Define page-level settings 	| Define page-level settings 	|
| Define slots               	| enableServices()           	|
| enableServices()           	| Define slots               	|
| Display slots              	| Display slots              	|

**Which one is better?**

Probably Define-Enable-Display according to the google DFP reference site:

[enableSingleRequest](https://developers.google.com/doubleclick-gpt/reference#
googletag.PubAdsService_enableSingleRequest)

> Enables single request mode for fetching multiple ads at the same time. **This
requires all pubads slots to be defined and added to the pubads service prior to
enabling the service**. Single request mode must be set before the service is 
enabled.

So to take advantage of SRA we have to define all slots before enabling the 
service.

 ### Future Features
___

| Features                                            | Status |
|-----------------------------------------------------|--------|
| 1. Create initial ads Heap                             | ok  |
| 2. Create Lazy Loaded Ads Heap                         | ok  |
| 3. Create Custom Lazy Loading functionality            | ok  |
| 4. Create Heap extraction/fetching/re-extraction logic | ok  |
| 5. Integrate Prebid.JS                                 | ok  |
| 6. Add Unit Testing Framework                          | x   |
| 7. Add Line Item Generator Utils                       | x   |
| 9. Add provider gpt event hooks                        | x   |
| 10. Disable loading ads                                | ok  |
| 11. Create dynamic ids                                 | ok  |
| 12. Add sizes dynamically on pregid bid request        | ok  |
| 13. Update prebid.js bidder to use the new config size | ok  |
| 14. Update the visibility function to use offsets      | ok  |
| 15. Add ix bidder helper                               | ok  |

#### AdCallManager

The adCall manager is a JobQueue for refreshing ads in chunks. Some pages load
20+ ads. The JobQueue allows to fetch ads in smaller chunks to allow more more 
bids on fewer ads.

#### Prebid.js

**What is prebid.js**

Prebid.js is a library that implements headerbidding. This library will provide 
us with with their bidder adapters. These adapters are mostly created by 
vendors. 

**Why prebid.js**

Prebid.js has almost all of the bidders that we currently use. It also provides
additional bidders that we can swap out without us having to create their
implementation from srcratch.

**How does a bidder work?**

A bidder requests bids from exchange servers. It will then set the bids as
targeting data on the ad slots. Whenever the ad slots render, it will make a
request to DFP with the bid information.

#### prebid.js sizeConfig

The prebid.js size config defines the allowed slot sizes on the page. Below is
an example of how prebid.js defines the sizes. The media queries specify which
sizes to bid on. 

**adSlot**

Here we define the sizes that this add will have.

```javascript
pbjs.addAdUnits([{
    code: "ad-slot-1",
    mediaTypes: {
        banner: {
            sizes: [
                [970, 90],
                [728, 90],
                [300, 250],
                [300, 100]
            ]
        }
    },
    labelAny: ["visitor-uk"]
    /* The full set of bids, not all of which are relevant on all devices */
    bids: [{
            bidder: "pulsepoint",
            /* Labels flag this bid as relevant only on these screen sizes. */
            labelAny: ["desktop", "tablet"],
            params: {
                "cf": "728X90",
                "cp": 123456,
                "ct": 123456
            }
        },
    ]
}]);
```

**Size Config**

Here we define the sizes that prebid will bid on, based on the media query,
and the sizes defined in the adSlot. This size config is GLOBAL!! which means
that it could result in many edge cases.

```javascript
pbjs.setConfig({
    sizeConfig: [{
        'mediaQuery': '(min-width: 1600px)',
        'sizesSupported': [
            [1000, 300],
            [970, 90],
            [728, 90],
            [300, 250]
        ],
        'labels': ['desktop-hd']
    }, {
        'mediaQuery': '(min-width: 1200px)',
        'sizesSupported': [
            [970, 90],
            [728, 90],
            [300, 250]
        ],
        'labels': ['desktop']
    }, {
        'mediaQuery': '(min-width: 768px) and (max-width: 1199px)',
        'sizesSupported': [
            [728, 90],
            [300, 250]
        ],
        'labels': ['tablet']
    }, {
        'mediaQuery': '(min-width: 0px)',
        'sizesSupported': [
            [300, 250],
            [300, 100]
        ],
        'labels': ['phone']
    }]
});
```

#### googletag sizeMapping without using sizeConfig

googletag provides a way to show/hide ads based on media queries and it 
specifies the adSizes to display on the specific media query.

We need to tell prebid which ads to fetch based on the sizes defined on the 
slot without using the sizeConfig.

**Why not use the sizeConfig?**

The size config defined global settings for requesting bids. We want to bid on 
the exact sizes defined in the googletag sizeMap.

case 1:

- window width is 1000px

In this we only want to fetch bids for the **large** ad slot. So we tell prebid
the sizes that we want to bid on by setting the `metiaTypes.banner.sizes` 
property.

**sizeMapping**

```javascript
var mapping1 = googletag.sizeMapping().
    addSize([1024, 768], [970, 250]). // large  <- current breakpoint
    addSize([980, 690], [728, 90]). // medium
    addSize([640, 480], 'fluid'). //sm
    addSize([0, 0], [88, 31]). // xs
    build();
```

We define the sizes in `metdiaTypes.banner.sizes` from the large size above.

**prebid adUnit**

```javascript
pbjs.addAdUnits([{
    code: "ad-slot-1",
    mediaTypes: {
        banner: {
            sizes: [
                [970, 250],
            ]
        }
    },
    bids: [{
            bidder: "pulsepoint",
            params: {
                "cf": "728X90",
                "cp": 123456,
                "ct": 123456
            }
        },
    ]
}]);
```

case 2:

- window width is 1000px (large) breakpoint
- We move down to 980px (medium) breakpoint

The window width is (large) and the (medium) breakpoint was triggered. Now
we have to update the prebid adUnit config to fetch the new bids.

**sizeMapping**

```javascript
var mapping1 = googletag.sizeMapping().
    addSize([1024, 768], [970, 250]). // large <----- old breakpoint
    addSize([980, 690], [728, 90]). // medium <------ new breakpoint
    addSize([640, 480], 'fluid'). //sm
    addSize([0, 0], [88, 31]). // xs
    build();
```

We define the (medium) sizes in `mediaTypes.banner.sizes` property before
requesting bids.

**prebid adUnit**

```javascript
pbjs.addAdUnits([{
    code: "ad-slot-1",
    mediaTypes: {
        banner: {
            sizes: [
                [728, 90], // medium <----- Replaced [970, 250]
            ]
        }
    },
    bids: [{
            bidder: "pulsepoint",
            params: {
                "cf": "728X90",
                "cp": 123456,
                "ct": 123456
            }
        },
    ]
}]);
```

Would this solution work for requesting bids when using googletags?

How to implement the proposed solution?

1. save the current ad sizes on the components state.
2. When the media query refresh function gets called. Trigger the 
refresh function and pass the new sizes. Clear the targeting and request 
new bids.

### bidder helpers.

Making idx bids is somewhat tedious whenever ceratin adUnits have to be mapped to certain sizes.

**idx**

Working with index is relatively easy. Once you have a copy of your map slots, you can use the idxBids helper to generate the bid code for you.


```javascript
import { ixBids } from './';

const indx = {
  xSlots: {
    14: { siteId: '211035', size: [300, 250] },
    15: { siteId: '211036', size: [300, 600] },
    16: { siteId: '211037', size: [300, 1050] },
  },
  mapping: {
    rect_1: ['14', '15', '16'],
  }
};

const yourAdUnitSizes = [[300, 250], [300, 600]];
const adUnitName = 'rect_1';

describe.only('ixBidder helper', () => {
  it('should map adUnit name to sizes', () => {
    const bids = ixBids(indx)(adUnitName, yourAdUnitSizes);
  });
});

// generates

// [
//   {
//     "bidder": "ix",
//     "params": {
//       "siteId": "211035",
//       "size": [
//         300,
//         250
//       ]
//     }
//   },
//   {
//     "bidder": "ix",
//     "params": {
//       "siteId": "211036",
//       "size": [
//         300,
//         600
//       ]
//     }
//   }
// ]
```

Use it in your bidder code like this:

```javascript
const bidderCode = (adUnitId, sizes) => ({
    code: adUnitId,
    mediaTypes: {
        banner: {
            sizes: sizes,
        },
    },
    bids: [
        // other bidder
        {
            bidder: 'criteo',
            params: {
                zoneId: 1234567,
            },
        },
        // ixBidder
        ...ixBids(adUnitId, sizes),
    ],
});
```

**rubicon**

 Once you have a copy of your map slots, you can use the rubiconBids helper to generate the bid code for you.


```javascript
import { _rubiconBids as rubiconBids } from './';

const accountId = 1090;

const screen = {
  mobile: 'mobile',
  desktop: 'desktop',
};

const rubiconMap = [
  // mobile
  { zoneId: 705194, siteId: 65531, mq: screen.mobile, size: [300, 250], accountId },
  { zoneId: 706194, siteId: 85531, mq: screen.mobile, size: [320, 50], accountId },
];

// curry the map to avoid doing this every time.
export default curriedRubiconBids(rubiconMap);
```

Use it in your bidder code like this:

```javascript
const bidderCode = (adUnitId, sizes) => ({
    code: adUnitId,
    mediaTypes: {
        banner: {
            sizes: sizes,
        },
    },
    bids: [        
        ...curriedRubiconBids('mobile', sizes),
    ],
});
```








Tables created with: [tablesgenerator](https://www.tablesgenerator.com/markdown_tables)
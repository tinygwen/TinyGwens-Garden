##### Demonstration
>[!info]- parent title
>parent body with working [external link](https://www.wikipedia.org/), though note that the problem also occurs with wikilinks
>>[!bug]- Nested title
>>nested body with broken [external link](https://www.wikipedia.org/) that mashes parts of text into nested title

behavior is expected when there are no links in the nested callout body. This may also get worse with subsequent nests. untested. anyways...

##### Expected Behavior
Expected behavior, as handled in obsidian:
![](https://files.catbox.moe/m6trkl.png)

##### raw text in demonstration
raw:
```
>[!info]- parent title
>parent body with working [external link](https://www.wikipedia.org/), though note that the problem also occurs with wikilinks
>>[!bug]- Nested title
>>nested body with broken [external link](https://www.wikipedia.org/) that mashes parts of text into nested title
```


wikilinks to headings starting with links break callouts
##### Demonstration
breaks in titles, also apperently breaks dropdowns:
>[!bug]- Test text [[wikilinks to headings starting with links break callouts#[Header that's an external link ( 3)](https //www.wikipedia.org/)|wikilink]]
>Test text
>> [!bug]- Test text [[wikilinks to headings starting with links break callouts#[Header that's an external link ( 3)](https //www.wikipedia.org/)|wikilink]]
>> Test text

breaks in bodies as well, you can see this also compounds with issue #2:
>[!bug]- Test text
>Test text [[wikilinks to headings starting with links break callouts#[Header that's an external link ( 3)](https //www.wikipedia.org/)|wikilink]]
>> [!bug]- Test text
>> Test text [[wikilinks to headings starting with links break callouts#[Header that's an external link ( 3)](https //www.wikipedia.org/)|wikilink]]

##### Expected behavior
Its expected that the link works, of course, and is displayed like this, just as it is handled in obsidian:
![](https://files.catbox.moe/y1uve0.png)

##### raw text in demonstration
raw combined:
```
>[!bug]- Test text [[wikilinks to headings starting with links break callouts#[Header that's an external link ( 3)](https //www.wikipedia.org/)|wikilink]]
>Test text [[wikilinks to headings starting with links break callouts#[Header that's an external link ( 3)](https //www.wikipedia.org/)|wikilink]]
>> [!bug]- Test text [[wikilinks to headings starting with links break callouts#[Header that's an external link ( 3)](https //www.wikipedia.org/)|wikilink]]
>> Test text [[wikilinks to headings starting with links break callouts#[Header that's an external link ( 3)](https //www.wikipedia.org/)|wikilink]]
```

# [Header that's an external link (#3)](https://www.wikipedia.org/)
~~to wikipedia as an example, for issue 3~~
i decided to seperate into multiple bug reports but i'm leaving this title here, as i imagine the hash could also be problematic

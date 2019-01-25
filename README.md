# Web components SEO
### Testing indexability of web components.

This website tests how regular and custom HTML tags are indexed by Google under different circumstances.


## Regular HTML

| content          | link                                                                                    |
|------------------|-----------------------------------------------------------------------------------------|
| static html      | [/html-static](https://leofavre.github.io/web-components-seo/html-static)               |
| sync javascript  | [/html-dynamic-sync](https://leofavre.github.io/web-components-seo/html-dynamic-sync)   |
| async javascript | [/html-dynamic-async](https://leofavre.github.io/web-components-seo/html-dynamic-async) |


## Custom HTML

| content          | tag definition | shadow DOM | link                                                                                            |
|------------------|----------------|------------|-------------------------------------------------------------------------------------------------|
| static html      | undefined      | —          | [/undefined-static](https://leofavre.github.io/web-components-seo/undefined-static)             |
| static html      | immediate      | yes        | [/shadow-static-sync](https://leofavre.github.io/web-components-seo/shadow-static-sync)         |
| static html      | lazy           | yes        | [/shadow-static-async](https://leofavre.github.io/web-components-seo/shadow-static-async)       |
| sync javascript  | immediate      | no         | [/noshadow-dynamic-sync](https://leofavre.github.io/web-components-seo/noshadow-dynamic-sync)   |
| sync javascript  | immediate      | yes        | [/shadow-dynamic-sync](https://leofavre.github.io/web-components-seo/shadow-dynamic-sync)       |
| async javascript | lazy           | no         | [/noshadow-dynamic-async](https://leofavre.github.io/web-components-seo/noshadow-dynamic-async) |
| async javascript | lazy           | yes        | [/shadow-dynamic-async](https://leofavre.github.io/web-components-seo/shadow-dynamic-async)     |
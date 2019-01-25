# Web components SEO
### Testing indexability of web components.

This website tests how regular and custom HTML tags are indexed by Google under different circumstances.


## Regular HTML

| Content          | Link                                                                                    | Seen by Google |
|------------------|-----------------------------------------------------------------------------------------|----------------|
| static html      | [/html-static](https://leofavre.github.io/web-components-seo/html-static)               | yes            |
| sync javascript  | [/html-dynamic-sync](https://leofavre.github.io/web-components-seo/html-dynamic-sync)   | yes            |
| async javascript | [/html-dynamic-async](https://leofavre.github.io/web-components-seo/html-dynamic-async) | no             |


## Custom HTML

| Content          | Tag definition | Shadow DOM | Link                                                                                            | Seen by Google |
|------------------|----------------|------------|-------------------------------------------------------------------------------------------------|----------------|
| static html      | undefined      | —          | [/undefined-static](https://leofavre.github.io/web-components-seo/undefined-static)             | yes            |
| static html      | immediate      | yes        | [/shadow-static-sync](https://leofavre.github.io/web-components-seo/shadow-static-sync)         | yes            |
| static html      | lazy           | yes        | [/shadow-static-async](https://leofavre.github.io/web-components-seo/shadow-static-async)       | yes            |
| sync javascript  | immediate      | no         | [/noshadow-dynamic-sync](https://leofavre.github.io/web-components-seo/noshadow-dynamic-sync)   | no             |
| sync javascript  | immediate      | yes        | [/shadow-dynamic-sync](https://leofavre.github.io/web-components-seo/shadow-dynamic-sync)       | no             |
| async javascript | lazy           | no         | [/noshadow-dynamic-async](https://leofavre.github.io/web-components-seo/noshadow-dynamic-async) | no             |
| async javascript | lazy           | yes        | [/shadow-dynamic-async](https://leofavre.github.io/web-components-seo/shadow-dynamic-async)     | no             |
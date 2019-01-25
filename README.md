# Web components SEO
### Testing indexability of web components.

This website tests how regular and custom HTML tags are indexed by Google under diferent circumstances.


### Regular HTML

| content          | link                                       |
|------------------|--------------------------------------------|
| static html      | [/html-static](/html-static)               |
| sync javascript  | [/html-dynamic-sync](/html-dynamic-sync)   |
| async javascript | [/html-dynamic-async](/html-dynamic-async) |


### Custom HTML

| content          | tag definition | shadow DOM | link                                               |
|------------------|----------------|------------|----------------------------------------------------|
| static html      | undefined      | —          | [/noshadow-static](/noshadow-static)               |
| static html      | immediate      | yes        | [/shadow-static-sync](/shadow-static-sync)         |
| static html      | lazy           | yes        | [/shadow-static-async](/shadow-static-async)       |
| sync javascript  | immediate      | no         | [/noshadow-dynamic-sync](/noshadow-dynamic-sync)   |
| sync javascript  | immediate      | yes        | [/shadow-dynamic-sync](/shadow-dynamic-sync)       |
| async javascript | lazy           | no         | [/noshadow-dynamic-async](/noshadow-dynamic-async) |
| async javascript | lazy           | yes        | [/shadow-dynamic-async](/shadow-dynamic-async)     |
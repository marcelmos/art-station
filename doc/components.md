# Art Station - Components data passing

Components:
- [Dropdown Button (Item)](#dropdown-button)
- [Tabs (Widget)](#tabs)

***

## Dropdown Button:
Component pass data object, which contains name, link



**Syntax:**
```
{
    element: [ html | string ],
    primaryLink: [ string ],
    list: [
        { link: [ string ], name: [ string ] },
        {...}
    ]
}
```

`element` - can contain DOM element or string \
`primaryLink`, `link` - contain string which is link to following subpage or page \
`list` - array list of elements inside dropdown element \
`name` - contain string for current element link

**Example:**
```js
const foo = {
        element: <img className="nav-user__image" src="https://via.placeholder.com/50" alt="logo" />,
        primaryLink: "/user-profile",
        list: [
            { link: '/user-profile', name: 'Profile panel' },
            { link: '/gallery', name: 'Galery' },
            { link: '/messages', name: 'Messages' },
            { link: '/settings', name: 'Profile settings' },
            { link: '/authorization', name: 'Log Out' }
        ]
    };
```

***

## Tabs:
# Layout

In this section...

- Dimensions
- Device Orientation
- Flexbox
- Absolute and relative positioning

## Dimensions

```
<SafeAreaView style={styles.container}>
    <View style={{
        backgroundColor: 'dodgerblue',
        width: 150,
        height: 70
    }}></View>
</SafeAreaView>
```

The value we just used for *with* and *height* are called *Densitiy-indipendent Pixels*

> _**D**ensitiy-**i**ndipendent **P**ixels_
> 
> Physical Pixels = DIPs x Scale Factor


![](https://www.dropbox.com/s/08tq4bznggxuaxk/Screenshot%202021-01-23%20at%2013.08.18.png?raw=1)

iPhone 4 can display 320 x 480 *points*. This points are abstract unit, they are not pixels.
The *scale factor* is 2x, which means every point contains 2px.

> What's the iPhone 4 screen resolution?

Physical Pixels = (320 x 480) * 2 = 640 x 960

If our actual width is 150, this means that will 300 Physical Pixels.

**This is roughly half of the screen width**.

> How ca we get the dimension of the device?

```
import { Dimensions } from 'react-native';

const dimesension = Dimensions.get("screen" | "window");
console.log(dimesension);
```

*Screen* will return the size of the entire sceen while *window* return the size of the visible app window. Those dimension are only different on Android.

**NB**. This api does not respond to orientation changes.


## Detecting Orientation Changes

1. go to `/app.json` <s>`"orientation": "portrait"`</s> `    "orientation": "default"`
2. we need [Hooks](https://github.com/react-native-community/hooks)

> Hooks are functions who brings extra capability to a component.

3. `yarn add @react-native-community/hooks`
4. `import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'`
5. `console.log(useDimensions());`
6. flip the phone

Now we can do something:

```
export default function App() {
    const { landscape } = useDeviceOrientation();

    return (
        <SafeAreaView>
            <View style={{
                backgroundColor: 'dodgerblue',
                width: '100%',
                height: landscape ? '100%' : '50%'
            }}></View>
        </SafeAreaView>
    );
}
```


## Flexbox

```
    return (
        <Fragment>
            <View style={{
                backgroundColor: 'silver',
                flex: 1 // it's like doing height 50%
            }} />
            <View style={{
                backgroundColor: 'pink',
                flex: 1
            }} />
            <View style={{
                backgroundColor: 'dodgerblue',
                flex: 1
            }} />
        </Fragment>
    );
}
```

In this example we have splitted our screen in 3 section. Each `flex: 1` represent 1/3 of the screen.
Now if we do:

```
    return (
        <Fragment>
            <View style={{
                backgroundColor: 'silver',
                flex: 2
            }} />
            <View style={{
                backgroundColor: 'pink',
                flex: 1
            }} />
            <View style={{
                backgroundColor: 'dodgerblue',
                flex: 1
            }} />
        </Fragment>
    );
}
```

We have splitted our screen in 4 sections and the first one is taking half of the screen.

### Direction

```
    return (
        <Fragment>
            <View style={{
                backgroundColor: 'silver',
                height: 100,
                width: 100
            }} />
            <View style={{
                backgroundColor: 'pink',
                height: 100,
                width: 100
            }} />
            <View style={{
                backgroundColor: 'dodgerblue',
                height: 100,
                width: 100
            }} />
        </Fragment>
    );
```

This is how it will look like:

![](https://www.dropbox.com/s/9u0jm99mwfbfjk4/screenshot%202021-01-24%20at%2019.40.32.png?raw=1)


>How can we make them sit next to each other?


```
    return (
        <View style={{
            flexDirection: 'row'
                flex: 1
        }}>
            <View style={{
                backgroundColor: 'silver',
                height: 100,
                width: 100
            }} />
            <View style={{
                backgroundColor: 'pink',
                height: 100,
                width: 100
            }} />
            <View style={{
                backgroundColor: 'dodgerblue',
                height: 100,
                width: 100
            }} />
        </View>
    );
```

By simply passing to the **container** the *flexDirection* property and set it to: `flexDirection: 'row'`. We can also reverse their order:

- `flexDirection: "row-reverse"` 
-  `flexDirection: "column-reverse"`


### `justifyContent`

> How can we display our `views` to the right or the to center of the screen?

we use the `justifyContent` on the container:

```
<View style={{
    flexDirection: 'row',
    justifyContent: 'center'
        flex: 1
}}>
```

![](https://www.dropbox.com/s/r9bk14r8iluacfo/screenshot%202021-01-24%20at%2019.58.52.png?raw=1)

Because we selected `flexDirection: 'row'` it will center our views **horizontally** but if do:

```
<View style={{
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1
}}>
```

it will center our views **vertically**.

![](https://www.dropbox.com/s/dq6300k3zcomocj/screenshot%202021-01-24%20at%2019.58.30.png?raw=1)

we also have 

- *flex-end*:

![](https://www.dropbox.com/s/3ea8wfkr3plugsc/screenshot%202021-01-24%20at%2020.03.34.png?raw=1)

- *flex-start* (the default value)

![](https://www.dropbox.com/s/sqnt33uycnrsydx/screenshot%202021-01-24%20at%2020.06.12.png?raw=1)

- *space-around*: the space beetween each item will be the same but the space before the firs element and the one left after thre last one is different.

![](https://www.dropbox.com/s/yax5mmo6ezzwn1w/screenshot%202021-01-24%20at%2020.07.47.png?raw=1)

- *space-evenly*: the space beetween each item will be the same everywhere.

- *space-between*

![](https://www.dropbox.com/s/hr0xv5mqiffprma/screenshot%202021-01-24%20at%2020.12.50.png?raw=1)



### `alignItems`

> How can we **center** our `views`?

```
<View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
}}>
```

- Now if we do *baseline*:

```
<View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'baseline'
}}>
```

let's also change the height of the view to better see how it works:

```
<View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'baseline'
}}>
    <View style={{
        backgroundColor: 'silver',
        height: 400,
        width: 100
    }} />
    <View style={{
        backgroundColor: 'pink',
        height: 200,
        width: 100
    }} />
    <View style={{
        backgroundColor: 'dodgerblue',
        height: 80,
        width: 100
    }} />
</View>
```

They share now the same *baseline*


![](https://www.dropbox.com/s/uo5wfcc4wfsilr9/screenshot%202021-01-24%20at%2020.23.14.png?raw=1)



- *flex-end*


![](https://www.dropbox.com/s/8cymwk1xi7h4i8i/screenshot%202021-01-24%20at%2020.25.28.png?raw=1)


- *flex-start*

![](https://www.dropbox.com/s/kfv37qn2kkv6k2x/screenshot%202021-01-24%20at%2020.28.23.png?raw=1)




### `alignSelf`

> What if now we wanna focus only on a **single** view?

```
<View style={{
flexDirection: 'row',
justifyContent: 'center',
flex: 1,
alignItems: 'center'
}}>
<View style={{
    backgroundColor: 'silver',
    height: 400,
    width: 100,
    alignSelf: 'flex-start'
}} />
```

![](https://www.dropbox.com/s/kpmyz61go4e51ui/screenshot%202021-01-24%20at%2020.34.54.png?raw=1)




## `flexWraps` and `alignContent`

This is the *deafult* beahviour: if our items overflow across the main axis one or more items get shrunk so all the elements can fit on the screen.

![](https://www.dropbox.com/s/wdjfqk304hoi9sp/screenshot%202021-01-24%20at%2020.43.00.png?raw=1)



We can change this behavour by adding `flexWrap: 'wrap'` to the container component


![](https://www.dropbox.com/s/rh0mdyfwewzqc9o/screenshot%202021-01-24%20at%2020.54.07.png?raw=1)

**It's not working!** They are horizontally align but are sitting at the top! Why?

> How can we fix this? With `alignContent: 'center'`

```
<View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center'
}}>
```
> `alignContent` works only in combo with wrapping!







































# Core components and [APIs](https://reactnative.dev/docs/activityindicator)

In this section...

- View
- Text
- Image
- Button
- Touchables
- Alert
- Styles
- Platform-specific code

## View component

As we know in r.n. we have a different mark-up.

```
<View style={styles.container}>
    <Text>Hello World!</Text>
</View>
```


`View` is like a `div`. Now view has a style attribute 

```
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
},
```

Not only *hello world* is not sitting in the center but also in a iPhone 11 it will be overlayed by the *notch*.

> How can we fix this?

- `import {SafeAreaView } from 'react-native';` 
- Replace the `<view>`:

```
<SafeAreaView style={styles.container}>
    <Text>Hello World!</Text>
</SafeAreaView>
```

it works. It's not centered but is no longer behind the *notch*


## Text component

Do you wanna display a txt? Well always remember to wrap it in a `<Text>` component.
Now this component has few interestring props such as [number of lines](https://reactnative.dev/docs/text#numberoflines).

Now if we add a very long text

```
<SafeAreaView style={styles.container}>
    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate iusto odit omnis repudiandae similique neque nisi eligendi blanditiis perspiciatis error eius, dolor exercitationem voluptatem natus ducimus adipisci, aperiam sit?</Text>
</SafeAreaView>
```

Bt default it will add soft wrap, but if we set the number of lines to 1 our txt will be truncated.

```
<SafeAreaView style={styles.container}>
    <Text numberOfLines="1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate iusto odit omnis repudiandae similique neque nisi eligendi blanditiis perspiciatis error eius, dolor exercitationem voluptatem natus ducimus adipisci, aperiam sit?
    </Text>
</SafeAreaView>
```

> Can we turn our string into a link to navigate?

We surely do. First we need to add an event listener `onPress={}`. This is very useful as we can pass an inline fn for exmaple `            <Text numberOfLines={1} onPress={() => console.log('papa')}>Click me</Text>`


## Images component

To render an image:

- `import { Image } from 'react-native';`
- `<Image source={require('./assets/favicon.png')}/>`

> Best practice is to import imgages from the web to occupy less memory

`<Image source={{uri: 'https://picsum.photos/200/300'}}/>`

> We can't see the img. Why?

Rn does not know which will be the img's size, so we have to manually tell it:

```
<Image source={{
width: 200,
height: 300,
uri: 'https://picsum.photos/200/300'}}/>
```

It works!

As usual this component has few props:

- [blurradius](https://reactnative.dev/docs/image#blurradius);
- [loadingindicatorsource](https://reactnative.dev/docs/image#loadingindicatorsource): the img we pass here will be displayed while the actual image is downloaded.
- [fadeduration](https://reactnative.dev/docs/image#fadeduration): this prop is only supported in Android. It will load the img with a fade effect
- [resizemode](https://reactnative.dev/docs/image#resizemode): if the dimension of our img is different from the dimension we specified.
                
## Touchables component

Let's allow the user to **tap** on this image. Now we know the `<Text>` has the `onPress={}` event but `<Image>` does not...

> How can we fix this?

By using touchables components:

- [touchablewithoutfeedback](https://reactnative.dev/docs/touchablewithoutfeedback)
- [touchableopacity](https://reactnative.dev/docs/touchableopacity)

```
<TouchableOpacity onPress={() => console.log('Tap')}>
    <Image
        blurRadius={5}
        source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300'
        }} />
</TouchableOpacity>
```

- [touchablehighlight](https://reactnative.dev/docs/touchablehighlight)


## Buttons & Alerts component

```
<Button color="dodgeblue" onPress={() => console.log('Uhhh...you just clicked me!')} title="Click me"></Button>

```

Same for alert:

```
<Button color="red" onPress={() => alert('Are you sure?')} title="Click me"></Button>
```

> Buttons and alerts look different in Adroid/iOS based on the original API.

Let's use now the `Alert` component:

```
<Button
	color="red"
	title="Click me"
	onPress={() => Alert.alert(
	    'Title',
	    'Message',
	    [
	        {
	            text: 'Yes'
	        },
	        {
	            text: 'No'
	        },
	    ]
	)}></Button>
```

>How cam we tell which btn is clicked ?


```
<Button
color="red"
title="Click me"
onPress={() => Alert.alert(
    'Title',
    'Message',
    [
        {
            text: 'Yes', onPress: () => console.log("You click yes")
        },
        {
            text: 'No', onPress: () => console.log("You click no")
        },
    ]
)}></Button>
```

Now let's look at the `prompt` method:


```
<Button
color="red"
title="Click me"
onPress={() => Alert.prompt(
    'Title',
    'Name',
    text => console.log(text)
)}></Button>
```


`text => console.log(text)` in this way we can log what the user type inside the input field.

>Bear in mind that `prompt` works only in iOS. In Android when we click nothing happens.




## Style


```
    return (
        <SafeAreaView style={styles.container}>
            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
```




>Can't we just do `const containerStyle`={ backgroundColor: "orange"}; ?

We could but we won't, because `StyleSheet.create()` works also as stylesheet validator. So if we have typo:

```
const styles = StyleSheet.create({
    container: {
        alignItemzz: 'center',
    },
});
```

it will yell at us in the console while the other will sttay silent.

We can also **combine multiple style obj** by simply passing an `[]`:

```
    return (
        <SafeAreaView style={[styles.container, styles.bg]}>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        backgroundColor: 'red',
    },
});

```

## Platform-specific code


We used before the `SafeAreaView` component to prevent the button to be overlayed by the *notch* on an Iphone 11.

> Will this work on Android too?

At this time it does not.

> How can we manually  add some *padding* but only on Android device?

That's when we need to use  _Platform module_:

```
import { Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 20 : 0
    }
});

```

**But the right way to do this is calc the height of status bar and use that as padding value.**

```
import {Platform, StatusBar } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});

```
























































  
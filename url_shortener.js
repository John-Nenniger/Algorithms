const l = console.log

class URLShortner {
    constructor(){
        this.library = {},
        this.characters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789']
    }

    shorten(url){
        // check to see if this url has been saved before
        let shortCircuit = undefined
        Object.entries(this.library).forEach(([key, value]) => {
            if(value === url){
                shortCircuit = key
            }
        })

        if (shortCircuit){ return shortCircuit }
        const key = this.generateRandomString()
        this.library[key] = url
        return key
    }

    restore(string){
        return this.library[string]
    }

    generateRandomString(){
        let result = []
        for(let i = 0; i < 6; i++){
            const randomIndex = (Math.floor(Math.random(62) * 62)) + 1
            result.push(this.characters[randomIndex])
        }
        return result.join("")
    }
} 


const shortner = new URLShortner()

const shortened = shortner.shorten("www.google.com")

l(shortened)
l(shortner.shorten('facebook.com'))
l(shortner.shorten('www.google.com'))
l(shortner.restore(shortened))
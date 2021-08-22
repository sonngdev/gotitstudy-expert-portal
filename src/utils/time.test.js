const time = require("./time")
// @ponicode
describe("time.getCurrentTime", () => {
    test("0", () => {
        let callFunction = () => {
            time.getCurrentTime()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("time.formatCountdownTimer", () => {
    test("0", () => {
        let callFunction = () => {
            time.formatCountdownTimer(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            time.formatCountdownTimer(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            time.formatCountdownTimer("Spectacled Caiman")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            time.formatCountdownTimer(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            time.formatCountdownTimer("Australian Freshwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            time.formatCountdownTimer(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

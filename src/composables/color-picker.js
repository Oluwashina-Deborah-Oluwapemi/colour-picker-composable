import { ref } from 'vue'

const useMatchColor = () => {
const message = ref("Pick a color...")
const colors = ref(["green", "red", "blue", "purple"])
const matchColor = (value) => {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (colors.value[randomNumber] === value) {
        message.value = `You win... [answer: ${colors.value[randomNumber]}]`
        return
    }
    message.value = `You loose [answer: ${colors.value[randomNumber]}]`
}

return { message, matchColor }

}

export default useMatchColor
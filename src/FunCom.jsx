import { generateRandomNumber, isDateEven } from "./utils";

const FunCom = () => {
    return (
        <div>
            {isDateEven() && "Neparan dan"}
            {!isDateEven() && generateRandomNumber(1,100)}
        </div>
    )
}

export default FunCom;
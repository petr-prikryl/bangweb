import { CSSProperties } from "react";
import { Milliseconds } from "../../../Model/ServerMessage";
import { getRectCenter } from "../../../Utils/Rect";
import useUpdateEveryFrame from "../../../Utils/UseUpdateEveryFrame";
import { getTokenSprite } from "../CardView";
import { TokenType } from "../Model/CardEnums";
import { CardTracker } from "../Model/CardTracker";
import { Card } from "../Model/GameTable";
import "./Style/MoveCubeAnimation.css";

export interface MoveCubeProps {
    tracker: CardTracker;
    token_type: TokenType;
    num_tokens: number;
    origin_card: Card | null;
    target_card: Card | null;
    duration: Milliseconds;
}

export default function MoveTokensAnimation ({ tracker, token_type, num_tokens, origin_card, target_card, duration }: MoveCubeProps) {
    const [startRect, endRect] = useUpdateEveryFrame(() => [
        tracker.getTokensRect(token_type, origin_card),
        tracker.getTokensRect(token_type, target_card)
    ]);
    
    if (startRect && endRect) {
        const startPoint = getRectCenter(startRect);
        const endPoint = getRectCenter(endRect);
        
        const style = {
            '--startX': startPoint.x + 'px',
            '--startY': startPoint.y + 'px',
            '--diffX': (endPoint.x - startPoint.x) + 'px',
            '--diffY': (endPoint.y - startPoint.y) + 'px',
            '--duration': duration + 'ms',
            '--num-cubes': num_tokens
        } as CSSProperties;

        const moveCubeIndexStyle = (i: number) => {
            return {
                '--move-cube-index': i
            } as CSSProperties;
        };

        const tokenSprite = getTokenSprite(token_type);
        return (
            <div style={style} className='move-cubes-animation'>
                {[...Array(num_tokens)].map((item, i) => (
                    <div key={i} style={moveCubeIndexStyle(i)}
                        className={`${num_tokens <= 1 ? 'total-delay-0' : ''} move-cubes-animation-inner`} >
                        <img src={tokenSprite} alt="" />
                    </div>
                ))}
            </div>
        );
    } else {
        return null;
    }
}
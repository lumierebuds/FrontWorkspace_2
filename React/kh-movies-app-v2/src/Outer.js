import { Outlet } from "react-router-dom";

function Outer() {
    return (
        <div className="outer">
            {/* 컴포넌트 추가 위치 */}
            <Outlet/>
        </div>
    )
}

export default Outer;
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import homeIcon from "../../assets/icon/homeIcon.svg";
import homeIconActive from "../../assets/icon/homeIconActive.svg";
import statsIcon from "../../assets/icon/statsIcon.svg";
import statsIconActive from "../../assets/icon/statsIconActive.svg";
import rankingIcon from "../../assets/icon/rankingIcon.svg";
import rankingIconActive from "../../assets/icon/rankingIconActive.svg";
import settingsIcon from "../../assets/icon/settingsIcon.svg";
import settingsIconActive from "../../assets/icon/settingsIconActive.svg";

const NAV_ITEMS = [
  { key: "home", label: "홈", icon: homeIcon, iconActive: homeIconActive, path: "/" },
  { key: "stats", label: "학습 통계", icon: statsIcon, iconActive: statsIconActive, path: null },
  { key: "ranking", label: "랭킹", icon: rankingIcon, iconActive: rankingIconActive, path: null },
  { key: "settings", label: "설정", icon: settingsIcon, iconActive: settingsIconActive, path: null },
];

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredKey, setHoveredKey] = useState(null);

  return (
    <Wrapper>
      {NAV_ITEMS.map((item) => {
        const isActive = item.path === location.pathname;
        const isHighlighted = isActive || hoveredKey === item.key;

        return (
          <NavItem
            key={item.key}
            onMouseEnter={() => setHoveredKey(item.key)}
            onMouseLeave={() => setHoveredKey(null)}
            onClick={() => item.path && navigate(item.path)}
          >
            <IconImg
              src={isHighlighted ? item.iconActive : item.icon}
              alt={item.label}
            />
            <Label $active={isHighlighted}>{item.label}</Label>
          </NavItem>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: 16px 28px 8px;
  box-sizing: border-box;
  background: #ffffff;
  border-top: 2px solid rgba(134, 102, 181, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const NavItem = styled.div`
  width: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;

const Label = styled.span`
  color: ${({ $active }) => ($active ? "#8666b5" : "rgba(0, 0, 0, 0.6)")};
  font-size: 12px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  word-wrap: break-word;
`;

export default BottomNav;
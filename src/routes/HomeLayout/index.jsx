import React from 'react';
import { HomeSections, TiltPageContainer } from '../../sections/';
import { MenuBar, NavArrows, CustomCursor } from '../../components';
import { useIsMobile } from '../../utils';

export const HomeLayout = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isEndOfPage, setIsEndOfPage] = React.useState(false);
  const CheckScrolledToEnd = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrolledToEnd =
      Math.ceil(scrollTop + windowHeight) >= documentHeight;

    setIsEndOfPage(isScrolledToEnd);
  };
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    scrollTop > 50 ? setIsScrolled(true) : setIsScrolled(false);
  };
  React.useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'smooth';
    window.scrollTo({
      top: 0,
    });
    window.window.addEventListener('scroll', () => {
      handleScroll();
      CheckScrolledToEnd();
    });
    return () => {
      window.removeEventListener('scroll', () => {
        handleScroll();
        CheckScrolledToEnd();
      });
      document.querySelector('html').style.scrollBehavior = null;
    };
  }, []);

  return (
    <div id="Home" style={isMobile ? { overflow: 'hidden' } : undefined}>
      <TiltPageContainer isMobile={isMobile} />
      <MenuBar isScrolled={isScrolled} />
      {!isMobile && (
        <>
          <CustomCursor />
          <NavArrows isScrolled={isScrolled} isEndOfPage={isEndOfPage} />
        </>
      )}
      <HomeSections isMobile={isMobile} />
    </div>
  );
};

export function isDetailNavActive(pathname, to) {
  if (to === "/categories") {
    return (
      pathname === "/categories" ||
      pathname.startsWith("/categories/") ||
      pathname.startsWith("/modules/")
    );
  }

  return pathname === to || pathname.startsWith(`${to}/`);
}

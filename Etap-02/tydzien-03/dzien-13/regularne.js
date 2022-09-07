const ip = '8.8.8.8 && format C:';
const safeIp = ip.replace(/[^0-9.]+/g, '');

console.log(safeIp);

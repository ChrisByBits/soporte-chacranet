export const firewall = (allowedIps) => {
    return (req, res, next) => {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log(ip)
        if (allowedIps.includes(ip)) {
            next();
        } else {
            res.status(403).json({ message: 'Access denied' });
        }
    };
};
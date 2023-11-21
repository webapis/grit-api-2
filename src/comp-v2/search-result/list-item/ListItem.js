
import Brand from "../brand/Brand"
import Favicon from "../favicon/Favicon"
import Host from "../host/Host"
import Link from "../link/Link"

const customBoxStyle = {
    border: '2px solid #3498db', // Customize the border color and style here
    borderRadius: '8px', // Add rounded corners
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    padding: '16px', // Add some padding for better appearance
};
export default function ListItem({ faviconUrl, hostTitle, brandTitle, linkText, docTitle, total, startPrice, images, link }) {
console.log('link',link)
    return <div style={{ ...customBoxStyle, margin: 5 }}> <a  href={link} target="_blank" style={{textDecoration:'none'}}>
        <FaviconBrandHostContainer faviconUrl={faviconUrl} hostTitle={hostTitle} brandTitle={brandTitle} />
        <Link href={link} text={linkText} />

    </a></div>
}

function FaviconBrandHostContainer({ faviconUrl, hostTitle, brandTitle }) {
    return <div style={{ display: 'flex', alignItems: 'center' }}>
        <div id='favivon-container' style={{ marginRight: 10 }}><Favicon url={faviconUrl} /></div>
        <div id='bran-hostname-container'>
            <div><Brand title={brandTitle} /></div>
            <div><Host title={hostTitle} /></div>
        </div>
    </div>
}

export {
    FaviconBrandHostContainer
}
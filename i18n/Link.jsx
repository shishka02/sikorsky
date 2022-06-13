import Link from 'next/link';
import { useLocaleContext } from './useLocaleContext';


export default function (props) {
    const { locale } = useLocaleContext();
    const href = '/' + (props.locale ?? locale) + props.href;

    return <Link
        {...props}
        href={href}
    />
}
// TypeScript interfaces for business information, website content, user data, and payment information.

interface BusinessInfo {
    name: string;
    description: string;
    location: string;
}

interface WebsiteContent {
    title: string;
    description: string;
    features: string[];
}

interface UserData {
    name: string;
    email: string;
    phone: string;
}

interface PaymentInfo {
    amount: number;
    currency: string;
    method: string;
}

export { BusinessInfo, WebsiteContent, UserData, PaymentInfo };
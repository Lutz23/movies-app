
export class Formatter {

    public static currency(valorem: number) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: "USD",
        }).format(valorem);
    }
}
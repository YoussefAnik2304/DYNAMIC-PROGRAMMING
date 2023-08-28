public class nsum {
    public static int nSum(int n) {
        int[] dp = new int[n+1];
        dp[0] = 0;

        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i-1] + i;
        }

        return dp[n];
    }

    public static void main(String[] args) {
        int n = 5; // Example value of n
        int result = nSum(n);
        System.out.println("Sum of the first " + n + " natural numbers: " + result);
    }
}
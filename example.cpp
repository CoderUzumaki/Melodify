#include <bits/stdc++.h>
using namespace std;

#define fastio() ios_base::sync_with_stdio(false), cin.tie(nullptr), cout.tie(nullptr);
typedef long long ll;
typedef vector<ll> vl;
#define out(x) cout << x << endl;
#define inint(x) int x; cin >> x;

void solve() {
    inint(n);
    vl B(n);
    for (int i = 0; i < n; i++) {
        cin >> B[i];
    }

    vl result(n);
    int maxSoFar = -1, minSoFar = n;
    ll total = 0;

    for (int i = 0; i < n; i++) {
        if (B[i] == 1) {
            if (maxSoFar > i) {
                total += 2;
            } else {
                total += 1;
            }
            maxSoFar = max(maxSoFar, i);
        } else {
            if (minSoFar < i) {
                total += 2;
            } else {
                total += 1;
            }
            minSoFar = min(minSoFar, i);
        }

        result[i] = total;
    }

    for (int i = 0; i < n; i++) {
        cout << result[i] << " ";
    }
    cout << endl;
}

int main() {
    fastio();
    inint(t);
    while (t--) {
        solve();
    }
    return 0;
}

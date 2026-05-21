import * as Sentry from '@sentry/node';

Sentry.init({ dsn: process.env.SENTRY_DSN });
Sentry.setTag('branch', process.env.VERSO_BRANCH ?? 'unknown');
Sentry.setTag('dev_email', process.env.VERSO_DEV_EMAIL ?? '');

function capture(label, fn) {
  try {
    fn();
  } catch (err) {
    Sentry.captureException(err);
    console.log(`captured: ${label} -> ${err.name}: ${err.message}`);
  }
}

// A variety of demo errors so Verso shows multiple distinct groups.
capture('ReferenceError', () => {
  if (value == null) {
    console.log('nope');
  }
});

capture('TypeError (null member access)', () => {
  const obj = null;
  obj.method();
});

capture('TypeError (undefined forEach)', () => {
  const arr = undefined;
  arr.forEach(() => {});
});

capture('SyntaxError (bad JSON)', () => {
  JSON.parse('{ broken json');
});

capture('Custom Error (business logic)', () => {
  throw new Error('Checkout failed: payment gateway returned 502');
});

try {
  await Promise.reject(new RangeError('Pagination cursor 999 out of range'));
} catch (err) {
  Sentry.captureException(err);
  console.log(`captured: async RangeError -> ${err.name}: ${err.message}`);
}

await Sentry.flush(2000);

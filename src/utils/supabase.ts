/**
 * Supabase client stubs - Disconnected for local static data mode.
 * All database operations run entirely on local static data or local file cache.
 */

const createMockClient = () => {
  const mockQueryBuilder = {
    select: () => mockQueryBuilder,
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => mockQueryBuilder,
    delete: () => mockQueryBuilder,
    eq: () => mockQueryBuilder,
    gt: () => mockQueryBuilder,
    like: () => mockQueryBuilder,
    order: () => mockQueryBuilder,
    limit: () => mockQueryBuilder,
    single: () => Promise.resolve({ data: null, error: null }),
    maybeSingle: () => Promise.resolve({ data: null, error: null }),
    upsert: () => Promise.resolve({ data: null, error: null }),
    then: (resolve: any) => resolve({ data: [], error: null })
  };

  return {
    from: () => mockQueryBuilder
  };
};

// Mock public and admin clients that prevent any external network calls
export const supabase = createMockClient() as any;
export const supabaseAdmin = createMockClient() as any;

// Indicates Supabase is disconnected, app uses local static mode
export const isSupabaseConfigured = () => false;


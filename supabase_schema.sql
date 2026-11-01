-- ==============================================================================
-- চাঁদের আলো ফাউন্ডেশন (Chader Alo Foundation)
-- Supabase PostgreSQL Database Schema + Secure RLS Policies
-- Version: 2.0 (নিরাপদ — November 2026)
-- নিরাপদভাবে পুনরায় চালানো যাবে (Idempotent / Safe to re-run)
-- ==============================================================================

-- 1. UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. CREATE TABLES (IF NOT EXISTS — আগের data মুছবে না)
-- ==============================================================================

-- রক্তদাতা তালিকা
CREATE TABLE IF NOT EXISTS public.donors (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    father TEXT DEFAULT '',
    blood_group TEXT NOT NULL,
    dob TEXT DEFAULT '',
    gender TEXT DEFAULT 'পুরুষ',
    weight NUMERIC DEFAULT 0,
    phone TEXT NOT NULL,
    whatsapp TEXT DEFAULT '',
    upazila TEXT DEFAULT 'গজারিয়া',
    village TEXT DEFAULT '',
    has_donated TEXT DEFAULT 'হ্যাঁ',
    last_donation_date TEXT DEFAULT '',
    donation_count INTEGER DEFAULT 0,
    verified BOOLEAN DEFAULT TRUE,
    status TEXT DEFAULT 'active',
    photo TEXT DEFAULT '',
    is_demo BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Phone UNIQUE constraint (একই নম্বরে দ্বিতীয় নিবন্ধন বন্ধ)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'donors_phone_unique'
  ) THEN
    ALTER TABLE public.donors ADD CONSTRAINT donors_phone_unique UNIQUE (phone);
  END IF;
END $$;

-- স্বেচ্ছাসেবী তালিকা
CREATE TABLE IF NOT EXISTS public.volunteers (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    father TEXT DEFAULT '',
    blood_group TEXT DEFAULT '',
    dob TEXT DEFAULT '',
    profession TEXT DEFAULT '',
    phone TEXT NOT NULL,
    whatsapp TEXT DEFAULT '',
    upazila TEXT DEFAULT 'গজারিয়া',
    village TEXT DEFAULT '',
    interest TEXT DEFAULT '',
    photo TEXT DEFAULT '',
    status TEXT DEFAULT 'active',
    joined_date TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Phone UNIQUE constraint
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'volunteers_phone_unique'
  ) THEN
    ALTER TABLE public.volunteers ADD CONSTRAINT volunteers_phone_unique UNIQUE (phone);
  END IF;
END $$;

-- জরুরি রক্তের আবেদন
CREATE TABLE IF NOT EXISTS public.emergency_requests (
    id TEXT PRIMARY KEY,
    patient_name TEXT NOT NULL,
    blood_group TEXT NOT NULL,
    bags TEXT DEFAULT '1',
    time TEXT DEFAULT 'জরুরি',
    hospital TEXT DEFAULT '',
    contact TEXT DEFAULT '',
    phone TEXT NOT NULL,
    reason TEXT DEFAULT '',
    urgency TEXT DEFAULT 'জরুরি',
    status TEXT DEFAULT 'active',
    managed_date TEXT DEFAULT '',
    donor_name TEXT DEFAULT '',
    donor_phone TEXT DEFAULT '',
    notes TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- নোটিশ বোর্ড
CREATE TABLE IF NOT EXISTS public.notices (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    date TEXT DEFAULT '',
    priority TEXT DEFAULT 'normal',
    author TEXT DEFAULT 'পরিচালনা পরিষদ',
    signee_role TEXT DEFAULT 'সভাপতি',
    status TEXT DEFAULT 'active',
    summary TEXT DEFAULT '',
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- গ্যালারি ও সামাজিক কর্মকাণ্ড
CREATE TABLE IF NOT EXISTS public.activities (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    media_type TEXT DEFAULT 'image',
    media_url TEXT DEFAULT '',
    date TEXT DEFAULT '',
    location TEXT DEFAULT '',
    description TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- মানবকল্যাণ ও সেবামূলক আবেদন (aid_applications — ব্যক্তিগত তথ্য)
CREATE TABLE IF NOT EXISTS public.aid_applications (
    id TEXT PRIMARY KEY,
    service_name TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT DEFAULT '',
    details TEXT DEFAULT '',
    status TEXT DEFAULT 'pending',
    submitted_at TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- রক্তদান সম্পন্ন ইতিহাস
CREATE TABLE IF NOT EXISTS public.donation_records (
    id TEXT PRIMARY KEY,
    request_id TEXT DEFAULT '',
    patient_name TEXT DEFAULT '',
    patient_phone TEXT DEFAULT '',
    hospital TEXT DEFAULT '',
    blood_group TEXT DEFAULT '',
    bags TEXT DEFAULT '1',
    donor_name TEXT DEFAULT '',
    donor_phone TEXT DEFAULT '',
    donor_address TEXT DEFAULT '',
    donation_date TEXT DEFAULT '',
    managed_date TEXT DEFAULT '',
    notes TEXT DEFAULT '',
    status TEXT DEFAULT 'managed',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ওয়েবসাইট সেটিংস
CREATE TABLE IF NOT EXISTS public.site_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ভিজিটর কাউন্টার
CREATE TABLE IF NOT EXISTS public.visitor_counter (
    id TEXT PRIMARY KEY DEFAULT 'main',
    count BIGINT DEFAULT 1,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 3. ROW LEVEL SECURITY (RLS) — নিরাপদ নীতিমালা
-- ==============================================================================

-- RLS সক্রিয় করো সব টেবিলে
ALTER TABLE public.donors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.emergency_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.aid_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donation_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visitor_counter ENABLE ROW LEVEL SECURITY;

-- পুরোনো Policies মুছো (পুনরায় চালালে conflict হবে না)
DO $$ BEGIN
  -- donors
  DROP POLICY IF EXISTS "Public can view donors" ON public.donors;
  DROP POLICY IF EXISTS "Public can register as donor" ON public.donors;
  DROP POLICY IF EXISTS "Admins can update donors" ON public.donors;
  DROP POLICY IF EXISTS "Admins can delete donors" ON public.donors;
  DROP POLICY IF EXISTS "Full access to authenticated" ON public.donors;
  DROP POLICY IF EXISTS "Full access to authenticated on donors" ON public.donors;
  DROP POLICY IF EXISTS "Allow anon update and delete on donors" ON public.donors;
  -- volunteers
  DROP POLICY IF EXISTS "Public can view volunteers" ON public.volunteers;
  DROP POLICY IF EXISTS "Public can register as volunteer" ON public.volunteers;
  DROP POLICY IF EXISTS "Full access to authenticated" ON public.volunteers;
  DROP POLICY IF EXISTS "Full access to authenticated on volunteers" ON public.volunteers;
  DROP POLICY IF EXISTS "Allow anon update and delete on volunteers" ON public.volunteers;
  -- emergency_requests
  DROP POLICY IF EXISTS "Public can view emergency_requests" ON public.emergency_requests;
  DROP POLICY IF EXISTS "Public can create emergency request" ON public.emergency_requests;
  DROP POLICY IF EXISTS "Full access to authenticated" ON public.emergency_requests;
  DROP POLICY IF EXISTS "Full access to authenticated on emergency_requests" ON public.emergency_requests;
  DROP POLICY IF EXISTS "Allow anon update and delete on emergency_requests" ON public.emergency_requests;
  -- notices
  DROP POLICY IF EXISTS "Public can view notices" ON public.notices;
  DROP POLICY IF EXISTS "Full access to authenticated" ON public.notices;
  DROP POLICY IF EXISTS "Full access to authenticated on notices" ON public.notices;
  DROP POLICY IF EXISTS "Allow anon update and delete on notices" ON public.notices;
  -- activities
  DROP POLICY IF EXISTS "Public can view activities" ON public.activities;
  DROP POLICY IF EXISTS "Full access to authenticated" ON public.activities;
  DROP POLICY IF EXISTS "Full access to authenticated on activities" ON public.activities;
  DROP POLICY IF EXISTS "Allow anon update and delete on activities" ON public.activities;
  -- aid_applications
  DROP POLICY IF EXISTS "Public can submit aid application" ON public.aid_applications;
  DROP POLICY IF EXISTS "Full access to authenticated" ON public.aid_applications;
  DROP POLICY IF EXISTS "Full access to authenticated on aid_applications" ON public.aid_applications;
  DROP POLICY IF EXISTS "Allow anon select and update on aid_applications" ON public.aid_applications;
  -- donation_records
  DROP POLICY IF EXISTS "Public can view donation_records" ON public.donation_records;
  DROP POLICY IF EXISTS "Full access to authenticated" ON public.donation_records;
  DROP POLICY IF EXISTS "Full access to authenticated on donation_records" ON public.donation_records;
  DROP POLICY IF EXISTS "Allow anon update and delete on donation_records" ON public.donation_records;
  -- site_settings
  DROP POLICY IF EXISTS "Public can view site_settings" ON public.site_settings;
  DROP POLICY IF EXISTS "Full access to authenticated" ON public.site_settings;
  DROP POLICY IF EXISTS "Full access to authenticated on site_settings" ON public.site_settings;
  DROP POLICY IF EXISTS "Allow anon update on site_settings" ON public.site_settings;
  -- visitor_counter
  DROP POLICY IF EXISTS "Public can view visitor_counter" ON public.visitor_counter;
  DROP POLICY IF EXISTS "Full access to authenticated" ON public.visitor_counter;
  DROP POLICY IF EXISTS "Full access to authenticated on visitor_counter" ON public.visitor_counter;
  DROP POLICY IF EXISTS "Allow anon update on visitor_counter" ON public.visitor_counter;
  DROP POLICY IF EXISTS "Anon can read visitor_counter" ON public.visitor_counter;
END $$;

-- ──────────────────────────────────────────────────────────────
-- A. PUBLIC (ANON) READ POLICIES — সবাই পড়তে পারবে
-- ──────────────────────────────────────────────────────────────
-- রক্তদাতা তালিকা দেখা (রক্ত খুঁজতে প্রয়োজন)
CREATE POLICY "anon_read_donors" ON public.donors
  FOR SELECT TO anon USING (true);

-- স্বেচ্ছাসেবী তালিকা দেখা
CREATE POLICY "anon_read_volunteers" ON public.volunteers
  FOR SELECT TO anon USING (true);

-- জরুরি রক্তের আবেদন দেখা (রক্তদাতারা দেখতে পারবেন)
CREATE POLICY "anon_read_emergency_requests" ON public.emergency_requests
  FOR SELECT TO anon USING (true);

-- নোটিশ বোর্ড দেখা (সবাই দেখতে পারবে)
CREATE POLICY "anon_read_notices" ON public.notices
  FOR SELECT TO anon USING (true);

-- গ্যালারি দেখা
CREATE POLICY "anon_read_activities" ON public.activities
  FOR SELECT TO anon USING (true);

-- সাইট সেটিংস দেখা (লোগো, ব্যানার ইত্যাদি)
CREATE POLICY "anon_read_site_settings" ON public.site_settings
  FOR SELECT TO anon USING (true);

-- ভিজিটর কাউন্টার দেখা
CREATE POLICY "anon_read_visitor_counter" ON public.visitor_counter
  FOR SELECT TO anon USING (true);

-- ⚠️ aid_applications — সাধারণ ভিজিটর পড়তে পারবে না (ব্যক্তিগত তথ্য সুরক্ষিত)
-- donation_records — সাধারণ ভিজিটর পড়তে পারবে না

-- ──────────────────────────────────────────────────────────────
-- B. PUBLIC (ANON) INSERT POLICIES — নিবন্ধন ফর্ম
-- ──────────────────────────────────────────────────────────────
-- রক্তদাতা নিবন্ধন
CREATE POLICY "anon_insert_donors" ON public.donors
  FOR INSERT TO anon WITH CHECK (true);

-- স্বেচ্ছাসেবী নিবন্ধন
CREATE POLICY "anon_insert_volunteers" ON public.volunteers
  FOR INSERT TO anon WITH CHECK (true);

-- জরুরি রক্তের আবেদন জমা
CREATE POLICY "anon_insert_emergency_requests" ON public.emergency_requests
  FOR INSERT TO anon WITH CHECK (true);

-- সেবামূলক আবেদন জমা (aid) — শুধু জমা করতে পারবে, পড়তে পারবে না
CREATE POLICY "anon_insert_aid_applications" ON public.aid_applications
  FOR INSERT TO anon WITH CHECK (true);

-- ──────────────────────────────────────────────────────────────
-- C. AUTHENTICATED (ADMIN) FULL ACCESS — লগইন করা Admin সব করতে পারবে
-- ──────────────────────────────────────────────────────────────
CREATE POLICY "admin_all_donors" ON public.donors
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "admin_all_volunteers" ON public.volunteers
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "admin_all_emergency_requests" ON public.emergency_requests
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "admin_all_notices" ON public.notices
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "admin_all_activities" ON public.activities
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- aid_applications — শুধু Admin পড়তে ও পরিবর্তন করতে পারবে
CREATE POLICY "admin_all_aid_applications" ON public.aid_applications
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- donation_records — শুধু Admin
CREATE POLICY "admin_all_donation_records" ON public.donation_records
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "admin_all_site_settings" ON public.site_settings
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "admin_all_visitor_counter" ON public.visitor_counter
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- ==============================================================================
-- 4. REALTIME REPLICATION — এক ডিভাইসে পরিবর্তন সব ডিভাইসে তাৎক্ষণিক দেখাবে
-- ==============================================================================
DO $$ BEGIN
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.donors; EXCEPTION WHEN OTHERS THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.volunteers; EXCEPTION WHEN OTHERS THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.emergency_requests; EXCEPTION WHEN OTHERS THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.notices; EXCEPTION WHEN OTHERS THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.activities; EXCEPTION WHEN OTHERS THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.aid_applications; EXCEPTION WHEN OTHERS THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.donation_records; EXCEPTION WHEN OTHERS THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.site_settings; EXCEPTION WHEN OTHERS THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.visitor_counter; EXCEPTION WHEN OTHERS THEN NULL; END;
END $$;

-- ==============================================================================
-- 5. VISITOR INCREMENT FUNCTION — নিরাপদ SECURITY DEFINER ফাংশন
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS BIGINT AS $$
DECLARE
  new_count BIGINT;
BEGIN
  INSERT INTO public.visitor_counter (id, count)
  VALUES ('main', 1)
  ON CONFLICT (id)
  DO UPDATE SET count = public.visitor_counter.count + 1, updated_at = NOW()
  RETURNING count INTO new_count;
  RETURN new_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==============================================================================
-- 6. SEED INITIAL DATA — প্রাথমিক ডেটা (পুনরায় চালালে হারাবে না)
-- ==============================================================================

-- ডিফল্ট রক্তদাতা
INSERT INTO public.donors (id, name, father, blood_group, dob, gender, weight, phone, whatsapp, upazila, village, has_donated, last_donation_date, donation_count, verified, status, photo, is_demo)
VALUES 
(
  'CAF-BD-1001', 'হালিম দেওয়ান', '', 'B+', '1980-01-01', 'পুরুষ', 70,
  '01914927933', '01914927933', 'গজারিয়া', 'কলেজ রোড',
  'হ্যাঁ', '2026-03-25', 5, true, 'active', 'assets/leader_halim.jpg', false
),
(
  'CAF-BD-1002', 'মোঃ মাসুম শিকদার', '', 'A+', '1985-05-10', 'পুরুষ', 68,
  '01785677062', '01785677062', 'গজারিয়া', 'হোগলাকান্দি, ভবেরচর, কলেজ রোড',
  'হ্যাঁ', '2026-08-02', 21, true, 'active', 'assets/leader_masum.png', false
)
ON CONFLICT (id) DO NOTHING;

-- ডিফল্ট নোটিশ
INSERT INTO public.notices (id, title, category, date, priority, author, signee_role, status, summary, content)
VALUES
(
  'NOT-2026-001',
  'বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বেচ্ছায় রক্তদান ক্যাম্পেইন-২০২৬',
  'রক্তদান কর্মসূচি', '2026-10-25', 'pinned',
  'হালিম দেওয়ান (সভাপতি)', 'সভাপতি', 'active',
  'আগামী শুক্রবার ভবেরচর কলেজ রোড প্রাঙ্গণে দিনব্যাপী বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও রক্তদান ক্যাম্পেইন অনুষ্ঠিত হবে।',
  'চাঁদের আলো ফাউন্ডেশনের সকল শুভাকাঙ্ক্ষী ও এলাকাবাসীর সদয় অবগতির জন্য জানানো যাচ্ছে যে, আর্ত মানবতার সেবায় নিয়মিত কর্মসূচির অংশ হিসেবে আগামী শুক্রবার সকাল ৯:০০ টা থেকে বিকেল ৫:০০ টা পর্যন্ত ভবেরচর কলেজ রোডস্থ অস্থায়ী কার্যালয়ে এক বিশাল বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বেচ্ছায় রক্তদান কর্মসূচি-২০২৬ অনুষ্ঠিত হবে।'
),
(
  'NOT-2026-002',
  'শীতার্ত ও সুবিধাবঞ্চিত মানুষের মাঝে শীতবস্ত্র বিতরণ সংক্রান্ত জরুরি বিজ্ঞপ্তি',
  'সমাজকল্যাণ', '2026-10-20', 'urgent',
  'মোঃ মাসুম শিকদার (সাধারণ সম্পাদক)', 'সাধারণ সম্পাদক', 'active',
  'আসন্ন শীত মৌসুমে অসহায় ও দরিদ্র পরিবারের মাঝে কম্বল ও শীতবস্ত্র বিতরণের তালিকা প্রস্তুত কার্যক্রম শুরু হয়েছে।',
  'চাঁদের আলো ফাউন্ডেশনের উদ্যোগে আগামী মাসে গজারিয়া উপজেলার বিভিন্ন ইউনিয়নের প্রত্যন্ত অঞ্চলে অসহায় বিধবা, এতিম ও দরিদ্র পরিবারের মাঝে শীতবস্ত্র ও কম্বল বিতরণ কর্মসূচি পরিচালিত হবে।'
),
(
  'NOT-2026-003',
  'ফাউন্ডেশনের আজীবন ও সাধারণ সদস্যপদ গ্রহণ নীতিমালা ও ফরম বিতরণ',
  'সাধারণ নোটিশ', '2026-10-10', 'normal',
  'কার্যনির্বাহী পরিষদ (যৌথ)', 'সাধারণ সম্পাদক', 'active',
  'চাঁদের আলো ফাউন্ডেশনের গঠনতন্ত্রের ধারা-০৫ মোতাবেক নতুন সদস্যপদ গ্রহণের আবেদন আহ্বান করা যাচ্ছে।',
  'চাঁদের আলো ফাউন্ডেশনের গঠনতন্ত্র অনুযায়ী যারা আর্ত মানবতার সেবায় আত্মনিয়োগ করতে চান, তাদের জন্য আজীবন সদস্য ও সাধারণ সদস্যপদ গ্রহণের আবেদন উন্মুক্ত করা হয়েছে। আগ্রহী ব্যক্তিবর্গ ওয়েবসাইট অথবা কেন্দ্রীয় কার্যালয় (বিসমিল্লাহ ভবন, কলেজ রোড, ভবেরচর) থেকে সদস্যপদ ফরম সংগ্রহ করতে পারবেন।'
)
ON CONFLICT (id) DO NOTHING;

-- ডিফল্ট গ্যালারি
INSERT INTO public.activities (id, title, category, media_type, media_url, date, location, description)
VALUES
(
  'ACT-01', 'গজারিয়ায় বিনামূল্যে রক্তের গ্রুপ নির্ণয়', 'রক্তদান', 'image',
  'assets/activity_blood.jpg', '2021-11-14',
  'কালীপুরা এনএস কান্দি সরকারি প্রাথমিক বিদ্যালয়, ইমামপুর, গজারিয়া',
  'মুন্সীগঞ্জের গজারিয়া উপজেলার ইমামপুর ইউনিয়নের কালীপুরা এনএস কান্দি সরকারি প্রাথমিক বিদ্যালয়ে চাঁদের আলো ফাউন্ডেশনের উদ্যোগে দিনব্যাপী বিনামূল্যে রক্তের গ্রুপ নির্ণয় কর্মসূচি অনুষ্ঠিত হয়।'
),
(
  'ACT-02', 'অসহায় ও শীতার্ত মানুষের মাঝে শীতবস্ত্র বিতরণ', 'ত্রাণ', 'image',
  '', '2022-01-10', 'হোগলাকান্দি, গজারিয়া',
  'শীত মৌসুমে হতদরিদ্র পরিবারের মাঝে কম্বল ও গরম কাপড় বিতরণ কর্মসূচি।'
),
(
  'ACT-03', 'মাসব্যাপী বৃক্ষরোপণ কর্মসূচি-২০২১', 'বৃক্ষরোপণ', 'image',
  'assets/activity_tree.jpg', '2021-07-06', 'গজারিয়া, মুন্সীগঞ্জ',
  'পরিবেশের ভারসাম্য রক্ষা ও সবুজায়নের লক্ষ্যে চাঁদের আলো ফাউন্ডেশনের উদ্যোগে মাসব্যাপী বৃক্ষরোপণ কর্মসূচি-২০২১ পরিচালিত হয়।'
)
ON CONFLICT (id) DO NOTHING;

-- ভিজিটর কাউন্টার শুরু
INSERT INTO public.visitor_counter (id, count)
VALUES ('main', 1)
ON CONFLICT (id) DO NOTHING;

-- ==============================================================================
-- সম্পন্ন! এখন Supabase Dashboard → Authentication → Users → Add User দিয়ে
-- একটি Admin account তৈরি করুন। সেই email ও password দিয়ে ওয়েবসাইটের
-- Admin প্যানেলে লগইন করুন।
-- ==============================================================================

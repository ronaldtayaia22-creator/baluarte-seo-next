export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      ai_usage_analytics: {
        Row: {
          business_id: string
          created_at: string
          event_type: string
          id: string
          metadata: Json | null
          user_id: string | null
        }
        Insert: {
          business_id: string
          created_at?: string
          event_type: string
          id?: string
          metadata?: Json | null
          user_id?: string | null
        }
        Update: {
          business_id?: string
          created_at?: string
          event_type?: string
          id?: string
          metadata?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_usage_analytics_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_usage_analytics_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      appointment_authorizations: {
        Row: {
          appointment_id: string
          file_name: string
          file_url: string
          id: string
          uploaded_at: string
          user_id: string
        }
        Insert: {
          appointment_id: string
          file_name: string
          file_url: string
          id?: string
          uploaded_at?: string
          user_id: string
        }
        Update: {
          appointment_id?: string
          file_name?: string
          file_url?: string
          id?: string
          uploaded_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointment_authorizations_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          business_id: string | null
          created_at: string
          date: string
          end_time: string
          group_id: string | null
          guest_email: string
          guest_name: string
          guest_phone: string | null
          id: string
          location_id: string | null
          notes: string | null
          professional_id: string | null
          service_id: string
          start_time: string
          status: Database["public"]["Enums"]["appointment_status"]
          updated_at: string
          user_id: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          date: string
          end_time: string
          group_id?: string | null
          guest_email: string
          guest_name: string
          guest_phone?: string | null
          id?: string
          location_id?: string | null
          notes?: string | null
          professional_id?: string | null
          service_id: string
          start_time: string
          status?: Database["public"]["Enums"]["appointment_status"]
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string
          date?: string
          end_time?: string
          group_id?: string | null
          guest_email?: string
          guest_name?: string
          guest_phone?: string | null
          id?: string
          location_id?: string | null
          notes?: string | null
          professional_id?: string | null
          service_id?: string
          start_time?: string
          status?: Database["public"]["Enums"]["appointment_status"]
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_log: {
        Row: {
          action: string
          business_id: string
          created_at: string
          details: Json | null
          entity_id: string | null
          entity_type: string
          id: string
          ip_address: string | null
          user_id: string
        }
        Insert: {
          action: string
          business_id: string
          created_at?: string
          details?: Json | null
          entity_id?: string | null
          entity_type: string
          id?: string
          ip_address?: string | null
          user_id: string
        }
        Update: {
          action?: string
          business_id?: string
          created_at?: string
          details?: Json | null
          entity_id?: string | null
          entity_type?: string
          id?: string
          ip_address?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_log_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_log_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_log: {
        Row: {
          business_id: string
          created_at: string
          id: string
          result: Json | null
          rule_id: string | null
          status: string
          target_email: string | null
          target_user_id: string | null
          trigger_event: string
        }
        Insert: {
          business_id: string
          created_at?: string
          id?: string
          result?: Json | null
          rule_id?: string | null
          status?: string
          target_email?: string | null
          target_user_id?: string | null
          trigger_event: string
        }
        Update: {
          business_id?: string
          created_at?: string
          id?: string
          result?: Json | null
          rule_id?: string | null
          status?: string
          target_email?: string | null
          target_user_id?: string | null
          trigger_event?: string
        }
        Relationships: [
          {
            foreignKeyName: "automation_log_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "automation_log_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "automation_log_rule_id_fkey"
            columns: ["rule_id"]
            isOneToOne: false
            referencedRelation: "automation_rules"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_rules: {
        Row: {
          action_config: Json | null
          action_type: string
          business_id: string
          conditions: Json | null
          created_at: string
          executions_count: number
          id: string
          is_active: boolean
          last_executed_at: string | null
          name: string
          trigger_event: string
          updated_at: string
        }
        Insert: {
          action_config?: Json | null
          action_type: string
          business_id: string
          conditions?: Json | null
          created_at?: string
          executions_count?: number
          id?: string
          is_active?: boolean
          last_executed_at?: string | null
          name: string
          trigger_event: string
          updated_at?: string
        }
        Update: {
          action_config?: Json | null
          action_type?: string
          business_id?: string
          conditions?: Json | null
          created_at?: string
          executions_count?: number
          id?: string
          is_active?: boolean
          last_executed_at?: string | null
          name?: string
          trigger_event?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "automation_rules_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "automation_rules_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      blocked_slots: {
        Row: {
          business_id: string | null
          created_at: string
          date: string
          end_time: string
          id: string
          location_id: string | null
          professional_id: string | null
          reason: string | null
          start_time: string
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          date: string
          end_time: string
          id?: string
          location_id?: string | null
          professional_id?: string | null
          reason?: string | null
          start_time: string
        }
        Update: {
          business_id?: string | null
          created_at?: string
          date?: string
          end_time?: string
          id?: string
          location_id?: string | null
          professional_id?: string | null
          reason?: string | null
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "blocked_slots_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_slots_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_slots_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_slots_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_slots_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals_public"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author_name: string
          business_id: string
          content: string
          cover_image_url: string | null
          created_at: string
          excerpt: string | null
          id: string
          language: string
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          slug: string
          status: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author_name?: string
          business_id: string
          content?: string
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          language?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug: string
          status?: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author_name?: string
          business_id?: string
          content?: string
          cover_image_url?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          language?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug?: string
          status?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_posts_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_policies: {
        Row: {
          allow_same_day_booking: boolean
          buffer_minutes_default: number
          business_id: string
          cancellation_window_hours: number
          created_at: string
          deposit_fixed_amount: number | null
          deposit_percentage: number | null
          deposit_required: boolean
          id: string
          max_advance_booking_days: number
          min_advance_booking_hours: number
          reschedule_window_hours: number
          updated_at: string
        }
        Insert: {
          allow_same_day_booking?: boolean
          buffer_minutes_default?: number
          business_id: string
          cancellation_window_hours?: number
          created_at?: string
          deposit_fixed_amount?: number | null
          deposit_percentage?: number | null
          deposit_required?: boolean
          id?: string
          max_advance_booking_days?: number
          min_advance_booking_hours?: number
          reschedule_window_hours?: number
          updated_at?: string
        }
        Update: {
          allow_same_day_booking?: boolean
          buffer_minutes_default?: number
          business_id?: string
          cancellation_window_hours?: number
          created_at?: string
          deposit_fixed_amount?: number | null
          deposit_percentage?: number | null
          deposit_required?: boolean
          id?: string
          max_advance_booking_days?: number
          min_advance_booking_hours?: number
          reschedule_window_hours?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "booking_policies_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_policies_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      business_hours: {
        Row: {
          business_id: string | null
          close_time: string
          day_of_week: number
          id: string
          is_open: boolean
          location_id: string | null
          open_time: string
        }
        Insert: {
          business_id?: string | null
          close_time: string
          day_of_week: number
          id?: string
          is_open?: boolean
          location_id?: string | null
          open_time: string
        }
        Update: {
          business_id?: string | null
          close_time?: string
          day_of_week?: number
          id?: string
          is_open?: boolean
          location_id?: string | null
          open_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_hours_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_hours_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_hours_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses: {
        Row: {
          address: string | null
          brand_colors: Json | null
          created_at: string
          currency: string
          email: string | null
          fiscal_address: string | null
          fiscal_id: string | null
          fiscal_name: string | null
          id: string
          is_active: boolean
          languages: string[] | null
          logo_url: string | null
          name: string
          phone: string | null
          settings: Json | null
          slug: string
          timezone: string
          updated_at: string
          website: string | null
        }
        Insert: {
          address?: string | null
          brand_colors?: Json | null
          created_at?: string
          currency?: string
          email?: string | null
          fiscal_address?: string | null
          fiscal_id?: string | null
          fiscal_name?: string | null
          id?: string
          is_active?: boolean
          languages?: string[] | null
          logo_url?: string | null
          name: string
          phone?: string | null
          settings?: Json | null
          slug: string
          timezone?: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          address?: string | null
          brand_colors?: Json | null
          created_at?: string
          currency?: string
          email?: string | null
          fiscal_address?: string | null
          fiscal_id?: string | null
          fiscal_name?: string | null
          id?: string
          is_active?: boolean
          languages?: string[] | null
          logo_url?: string | null
          name?: string
          phone?: string | null
          settings?: Json | null
          slug?: string
          timezone?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      calendar_connections: {
        Row: {
          business_id: string
          created_at: string
          external_calendar_id: string | null
          id: string
          last_synced_at: string | null
          professional_id: string
          provider: string
          settings: Json | null
          sync_enabled: boolean
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          external_calendar_id?: string | null
          id?: string
          last_synced_at?: string | null
          professional_id: string
          provider: string
          settings?: Json | null
          sync_enabled?: boolean
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          external_calendar_id?: string | null
          id?: string
          last_synced_at?: string | null
          professional_id?: string
          provider?: string
          settings?: Json | null
          sync_enabled?: boolean
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_connections_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_connections_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_connections_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_connections_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals_public"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_recipients: {
        Row: {
          campaign_id: string
          clicked_at: string | null
          client_user_id: string | null
          email: string
          id: string
          opened_at: string | null
          sent_at: string | null
          status: string
        }
        Insert: {
          campaign_id: string
          clicked_at?: string | null
          client_user_id?: string | null
          email: string
          id?: string
          opened_at?: string | null
          sent_at?: string | null
          status?: string
        }
        Update: {
          campaign_id?: string
          clicked_at?: string | null
          client_user_id?: string | null
          email?: string
          id?: string
          opened_at?: string | null
          sent_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaign_recipients_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          body: string | null
          business_id: string
          created_at: string
          id: string
          name: string
          scheduled_at: string | null
          segment_filters: Json | null
          sent_at: string | null
          stats: Json | null
          status: string
          subject: string | null
          type: string
          updated_at: string
        }
        Insert: {
          body?: string | null
          business_id: string
          created_at?: string
          id?: string
          name: string
          scheduled_at?: string | null
          segment_filters?: Json | null
          sent_at?: string | null
          stats?: Json | null
          status?: string
          subject?: string | null
          type?: string
          updated_at?: string
        }
        Update: {
          body?: string | null
          business_id?: string
          created_at?: string
          id?: string
          name?: string
          scheduled_at?: string | null
          segment_filters?: Json | null
          sent_at?: string | null
          stats?: Json | null
          status?: string
          subject?: string | null
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaigns_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      client_notes: {
        Row: {
          author_user_id: string
          business_id: string
          client_user_id: string
          created_at: string
          id: string
          is_internal: boolean
          note: string
          updated_at: string
        }
        Insert: {
          author_user_id: string
          business_id: string
          client_user_id: string
          created_at?: string
          id?: string
          is_internal?: boolean
          note: string
          updated_at?: string
        }
        Update: {
          author_user_id?: string
          business_id?: string
          client_user_id?: string
          created_at?: string
          id?: string
          is_internal?: boolean
          note?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_notes_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_notes_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      client_stats: {
        Row: {
          business_id: string
          flag_reason: string | null
          id: string
          is_flagged: boolean
          total_bookings: number
          total_cancelled: number
          total_completed: number
          total_no_shows: number
          updated_at: string
          user_id: string
        }
        Insert: {
          business_id: string
          flag_reason?: string | null
          id?: string
          is_flagged?: boolean
          total_bookings?: number
          total_cancelled?: number
          total_completed?: number
          total_no_shows?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          business_id?: string
          flag_reason?: string | null
          id?: string
          is_flagged?: boolean
          total_bookings?: number
          total_cancelled?: number
          total_completed?: number
          total_no_shows?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_stats_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_stats_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      client_tag_assignments: {
        Row: {
          assigned_at: string
          assigned_by: string
          business_id: string
          client_user_id: string
          id: string
          tag_id: string
        }
        Insert: {
          assigned_at?: string
          assigned_by: string
          business_id: string
          client_user_id: string
          id?: string
          tag_id: string
        }
        Update: {
          assigned_at?: string
          assigned_by?: string
          business_id?: string
          client_user_id?: string
          id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_tag_assignments_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_tag_assignments_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_tag_assignments_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "client_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      client_tags: {
        Row: {
          business_id: string
          color: string
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          business_id: string
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          business_id?: string
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_tags_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_tags_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      client_timeline_events: {
        Row: {
          business_id: string
          client_user_id: string
          created_at: string
          description: string | null
          event_type: string
          id: string
          metadata: Json | null
          reference_id: string | null
          title: string
        }
        Insert: {
          business_id: string
          client_user_id: string
          created_at?: string
          description?: string | null
          event_type: string
          id?: string
          metadata?: Json | null
          reference_id?: string | null
          title: string
        }
        Update: {
          business_id?: string
          client_user_id?: string
          created_at?: string
          description?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
          reference_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_timeline_events_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_timeline_events_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      consent_records: {
        Row: {
          business_id: string
          consent_type: string
          granted: boolean
          granted_at: string
          id: string
          ip_address: string | null
          revoked_at: string | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          business_id: string
          consent_type: string
          granted?: boolean
          granted_at?: string
          id?: string
          ip_address?: string | null
          revoked_at?: string | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          business_id?: string
          consent_type?: string
          granted?: boolean
          granted_at?: string
          id?: string
          ip_address?: string | null
          revoked_at?: string | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "consent_records_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consent_records_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_messages: {
        Row: {
          business_id: string | null
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_messages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_messages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      data_deletion_requests: {
        Row: {
          business_id: string
          id: string
          processed_at: string | null
          processed_by: string | null
          reason: string | null
          requested_at: string
          status: string
          user_id: string
        }
        Insert: {
          business_id: string
          id?: string
          processed_at?: string | null
          processed_by?: string | null
          reason?: string | null
          requested_at?: string
          status?: string
          user_id: string
        }
        Update: {
          business_id?: string
          id?: string
          processed_at?: string | null
          processed_by?: string | null
          reason?: string | null
          requested_at?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "data_deletion_requests_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "data_deletion_requests_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      email_send_log: {
        Row: {
          created_at: string
          email_type: string | null
          error_message: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          recipient_count: number | null
          recipient_email: string | null
          status: string | null
          template_name: string | null
        }
        Insert: {
          created_at?: string
          email_type?: string | null
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_count?: number | null
          recipient_email?: string | null
          status?: string | null
          template_name?: string | null
        }
        Update: {
          created_at?: string
          email_type?: string | null
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_count?: number | null
          recipient_email?: string | null
          status?: string | null
          template_name?: string | null
        }
        Relationships: []
      }
      feedback_requests: {
        Row: {
          appointment_id: string | null
          business_id: string
          client_user_id: string
          comment: string | null
          completed_at: string | null
          created_at: string
          id: string
          rating: number | null
          sent_at: string | null
          service_rating: number | null
          staff_rating: number | null
          status: string
        }
        Insert: {
          appointment_id?: string | null
          business_id: string
          client_user_id: string
          comment?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          rating?: number | null
          sent_at?: string | null
          service_rating?: number | null
          staff_rating?: number | null
          status?: string
        }
        Update: {
          appointment_id?: string | null
          business_id?: string
          client_user_id?: string
          comment?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          rating?: number | null
          sent_at?: string | null
          service_rating?: number | null
          staff_rating?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "feedback_requests_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feedback_requests_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feedback_requests_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_items: {
        Row: {
          description: string
          id: string
          invoice_id: string
          quantity: number
          service_id: string | null
          sort_order: number | null
          tax_amount: number | null
          tax_rate: number | null
          total: number
          unit_price: number
        }
        Insert: {
          description: string
          id?: string
          invoice_id: string
          quantity?: number
          service_id?: string | null
          sort_order?: number | null
          tax_amount?: number | null
          tax_rate?: number | null
          total: number
          unit_price: number
        }
        Update: {
          description?: string
          id?: string
          invoice_id?: string
          quantity?: number
          service_id?: string | null
          sort_order?: number | null
          tax_amount?: number | null
          tax_rate?: number | null
          total?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          appointment_id: string | null
          business_id: string
          client_address: string | null
          client_email: string
          client_fiscal_id: string | null
          client_name: string
          created_at: string
          currency: string
          due_at: string | null
          emitter_address: string | null
          emitter_email: string | null
          emitter_fiscal_id: string | null
          emitter_logo_url: string | null
          emitter_name: string | null
          emitter_phone: string | null
          id: string
          insurer_name: string | null
          invoice_number: string
          invoice_type: string
          issued_at: string | null
          notes: string | null
          paid_at: string | null
          payment_id: string | null
          pdf_url: string | null
          status: string
          subtotal: number
          tax_amount: number
          total: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          appointment_id?: string | null
          business_id: string
          client_address?: string | null
          client_email: string
          client_fiscal_id?: string | null
          client_name: string
          created_at?: string
          currency?: string
          due_at?: string | null
          emitter_address?: string | null
          emitter_email?: string | null
          emitter_fiscal_id?: string | null
          emitter_logo_url?: string | null
          emitter_name?: string | null
          emitter_phone?: string | null
          id?: string
          insurer_name?: string | null
          invoice_number: string
          invoice_type?: string
          issued_at?: string | null
          notes?: string | null
          paid_at?: string | null
          payment_id?: string | null
          pdf_url?: string | null
          status?: string
          subtotal?: number
          tax_amount?: number
          total?: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          appointment_id?: string | null
          business_id?: string
          client_address?: string | null
          client_email?: string
          client_fiscal_id?: string | null
          client_name?: string
          created_at?: string
          currency?: string
          due_at?: string | null
          emitter_address?: string | null
          emitter_email?: string | null
          emitter_fiscal_id?: string | null
          emitter_logo_url?: string | null
          emitter_name?: string | null
          emitter_phone?: string | null
          id?: string
          insurer_name?: string | null
          invoice_number?: string
          invoice_type?: string
          issued_at?: string | null
          notes?: string | null
          paid_at?: string | null
          payment_id?: string | null
          pdf_url?: string | null
          status?: string
          subtotal?: number
          tax_amount?: number
          total?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      locations: {
        Row: {
          address: string | null
          business_id: string
          created_at: string
          email: string | null
          id: string
          is_active: boolean
          name: string
          phone: string | null
          settings: Json | null
          timezone: string
          updated_at: string
        }
        Insert: {
          address?: string | null
          business_id: string
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          name: string
          phone?: string | null
          settings?: Json | null
          timezone?: string
          updated_at?: string
        }
        Update: {
          address?: string | null
          business_id?: string
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          name?: string
          phone?: string | null
          settings?: Json | null
          timezone?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "locations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "locations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      loyalty_config: {
        Row: {
          business_id: string
          created_at: string
          id: string
          is_active: boolean
          points_per_booking: number
          points_per_euro: number
          points_per_referral: number
          redemption_rate: number
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          id?: string
          is_active?: boolean
          points_per_booking?: number
          points_per_euro?: number
          points_per_referral?: number
          redemption_rate?: number
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          id?: string
          is_active?: boolean
          points_per_booking?: number
          points_per_euro?: number
          points_per_referral?: number
          redemption_rate?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "loyalty_config_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "loyalty_config_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      loyalty_points: {
        Row: {
          business_id: string
          created_at: string
          description: string | null
          expires_at: string | null
          id: string
          points: number
          source: string
          source_id: string | null
          user_id: string
        }
        Insert: {
          business_id: string
          created_at?: string
          description?: string | null
          expires_at?: string | null
          id?: string
          points?: number
          source: string
          source_id?: string | null
          user_id: string
        }
        Update: {
          business_id?: string
          created_at?: string
          description?: string | null
          expires_at?: string | null
          id?: string
          points?: number
          source?: string
          source_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "loyalty_points_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "loyalty_points_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      package_purchases: {
        Row: {
          business_id: string
          client_email: string
          client_name: string
          created_at: string
          expires_at: string | null
          id: string
          package_id: string
          payment_id: string | null
          purchase_date: string
          sessions_remaining: number
          sessions_used: number
          status: string
          user_id: string | null
        }
        Insert: {
          business_id: string
          client_email: string
          client_name: string
          created_at?: string
          expires_at?: string | null
          id?: string
          package_id: string
          payment_id?: string | null
          purchase_date?: string
          sessions_remaining: number
          sessions_used?: number
          status?: string
          user_id?: string | null
        }
        Update: {
          business_id?: string
          client_email?: string
          client_name?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          package_id?: string
          payment_id?: string | null
          purchase_date?: string
          sessions_remaining?: number
          sessions_used?: number
          status?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "package_purchases_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "package_purchases_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "package_purchases_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "packages"
            referencedColumns: ["id"]
          },
        ]
      }
      package_redemptions: {
        Row: {
          appointment_id: string | null
          id: string
          purchase_id: string
          redeemed_at: string
        }
        Insert: {
          appointment_id?: string | null
          id?: string
          purchase_id: string
          redeemed_at?: string
        }
        Update: {
          appointment_id?: string | null
          id?: string
          purchase_id?: string
          redeemed_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "package_redemptions_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "package_redemptions_purchase_id_fkey"
            columns: ["purchase_id"]
            isOneToOne: false
            referencedRelation: "package_purchases"
            referencedColumns: ["id"]
          },
        ]
      }
      package_services: {
        Row: {
          id: string
          package_id: string
          service_id: string
          sessions_included: number
        }
        Insert: {
          id?: string
          package_id: string
          service_id: string
          sessions_included?: number
        }
        Update: {
          id?: string
          package_id?: string
          service_id?: string
          sessions_included?: number
        }
        Relationships: [
          {
            foreignKeyName: "package_services_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "packages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "package_services_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      packages: {
        Row: {
          business_id: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          name: string
          price: number
          total_sessions: number
          updated_at: string
          validity_days: number | null
        }
        Insert: {
          business_id: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
          price?: number
          total_sessions: number
          updated_at?: string
          validity_days?: number | null
        }
        Update: {
          business_id?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
          price?: number
          total_sessions?: number
          updated_at?: string
          validity_days?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "packages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "packages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      patient_reviews: {
        Row: {
          business_id: string | null
          comment: string
          created_at: string
          display_name: string | null
          id: string
          is_approved: boolean
          rating: number
          review_status: string
          user_id: string
        }
        Insert: {
          business_id?: string | null
          comment: string
          created_at?: string
          display_name?: string | null
          id?: string
          is_approved?: boolean
          rating?: number
          review_status?: string
          user_id: string
        }
        Update: {
          business_id?: string | null
          comment?: string
          created_at?: string
          display_name?: string | null
          id?: string
          is_approved?: boolean
          rating?: number
          review_status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "patient_reviews_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "patient_reviews_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          appointment_id: string | null
          business_id: string
          created_at: string
          currency: string
          deposit_amount: number | null
          id: string
          is_deposit: boolean
          metadata: Json | null
          package_purchase_id: string | null
          paid_at: string | null
          payment_method: string | null
          status: string
          stripe_charge_id: string | null
          stripe_payment_intent_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount: number
          appointment_id?: string | null
          business_id: string
          created_at?: string
          currency?: string
          deposit_amount?: number | null
          id?: string
          is_deposit?: boolean
          metadata?: Json | null
          package_purchase_id?: string | null
          paid_at?: string | null
          payment_method?: string | null
          status?: string
          stripe_charge_id?: string | null
          stripe_payment_intent_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount?: number
          appointment_id?: string | null
          business_id?: string
          created_at?: string
          currency?: string
          deposit_amount?: number | null
          id?: string
          is_deposit?: boolean
          metadata?: Json | null
          package_purchase_id?: string | null
          paid_at?: string | null
          payment_method?: string | null
          status?: string
          stripe_charge_id?: string | null
          stripe_payment_intent_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_package_purchase_id_fkey"
            columns: ["package_purchase_id"]
            isOneToOne: false
            referencedRelation: "package_purchases"
            referencedColumns: ["id"]
          },
        ]
      }
      professional_availability: {
        Row: {
          created_at: string
          day_of_week: number
          end_time: string
          id: string
          is_active: boolean
          location_id: string | null
          professional_id: string
          start_time: string
        }
        Insert: {
          created_at?: string
          day_of_week: number
          end_time: string
          id?: string
          is_active?: boolean
          location_id?: string | null
          professional_id: string
          start_time: string
        }
        Update: {
          created_at?: string
          day_of_week?: number
          end_time?: string
          id?: string
          is_active?: boolean
          location_id?: string | null
          professional_id?: string
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "professional_availability_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "professional_availability_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "professional_availability_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals_public"
            referencedColumns: ["id"]
          },
        ]
      }
      professional_services: {
        Row: {
          created_at: string
          custom_duration_minutes: number | null
          custom_price: number | null
          id: string
          is_active: boolean
          professional_id: string
          service_id: string
        }
        Insert: {
          created_at?: string
          custom_duration_minutes?: number | null
          custom_price?: number | null
          id?: string
          is_active?: boolean
          professional_id: string
          service_id: string
        }
        Update: {
          created_at?: string
          custom_duration_minutes?: number | null
          custom_price?: number | null
          id?: string
          is_active?: boolean
          professional_id?: string
          service_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "professional_services_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "professional_services_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "professional_services_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      professional_time_off: {
        Row: {
          created_at: string
          end_date: string
          id: string
          is_approved: boolean
          professional_id: string
          reason: string | null
          start_date: string
        }
        Insert: {
          created_at?: string
          end_date: string
          id?: string
          is_approved?: boolean
          professional_id: string
          reason?: string | null
          start_date: string
        }
        Update: {
          created_at?: string
          end_date?: string
          id?: string
          is_approved?: boolean
          professional_id?: string
          reason?: string | null
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "professional_time_off_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "professional_time_off_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals_public"
            referencedColumns: ["id"]
          },
        ]
      }
      professionals: {
        Row: {
          bio: string | null
          business_id: string
          created_at: string
          email: string | null
          id: string
          is_active: boolean
          name: string
          phone: string | null
          photo_url: string | null
          role_title: string
          settings: Json | null
          specialties: string[] | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          bio?: string | null
          business_id: string
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          name: string
          phone?: string | null
          photo_url?: string | null
          role_title?: string
          settings?: Json | null
          specialties?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          bio?: string | null
          business_id?: string
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          name?: string
          phone?: string | null
          photo_url?: string | null
          role_title?: string
          settings?: Json | null
          specialties?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "professionals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "professionals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          created_at: string
          email: string | null
          full_name: string
          has_insurance: boolean
          id: string
          insurance_company: string | null
          insured_person_name: string | null
          phone: string | null
          policy_end_date: string | null
          policy_file_url: string | null
          policy_number: string | null
          policy_start_date: string | null
          policy_validated: boolean
          referral_code: string | null
          referred_by_code: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          email?: string | null
          full_name?: string
          has_insurance?: boolean
          id: string
          insurance_company?: string | null
          insured_person_name?: string | null
          phone?: string | null
          policy_end_date?: string | null
          policy_file_url?: string | null
          policy_number?: string | null
          policy_start_date?: string | null
          policy_validated?: boolean
          referral_code?: string | null
          referred_by_code?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          created_at?: string
          email?: string | null
          full_name?: string
          has_insurance?: boolean
          id?: string
          insurance_company?: string | null
          insured_person_name?: string | null
          phone?: string | null
          policy_end_date?: string | null
          policy_file_url?: string | null
          policy_number?: string | null
          policy_start_date?: string | null
          policy_validated?: boolean
          referral_code?: string | null
          referred_by_code?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      provider_config: {
        Row: {
          business_id: string
          config: Json | null
          created_at: string
          id: string
          is_active: boolean
          is_fallback: boolean
          provider_name: string
          provider_type: string
          updated_at: string
          usage_current: number | null
          usage_limit_monthly: number | null
        }
        Insert: {
          business_id: string
          config?: Json | null
          created_at?: string
          id?: string
          is_active?: boolean
          is_fallback?: boolean
          provider_name: string
          provider_type: string
          updated_at?: string
          usage_current?: number | null
          usage_limit_monthly?: number | null
        }
        Update: {
          business_id?: string
          config?: Json | null
          created_at?: string
          id?: string
          is_active?: boolean
          is_fallback?: boolean
          provider_name?: string
          provider_type?: string
          updated_at?: string
          usage_current?: number | null
          usage_limit_monthly?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "provider_config_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "provider_config_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      quote_items: {
        Row: {
          description: string
          id: string
          quantity: number
          quote_id: string
          service_id: string | null
          sort_order: number | null
          tax_amount: number | null
          tax_rate: number | null
          total: number
          unit_price: number
        }
        Insert: {
          description: string
          id?: string
          quantity?: number
          quote_id: string
          service_id?: string | null
          sort_order?: number | null
          tax_amount?: number | null
          tax_rate?: number | null
          total: number
          unit_price: number
        }
        Update: {
          description?: string
          id?: string
          quantity?: number
          quote_id?: string
          service_id?: string | null
          sort_order?: number | null
          tax_amount?: number | null
          tax_rate?: number | null
          total?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "quote_items_quote_id_fkey"
            columns: ["quote_id"]
            isOneToOne: false
            referencedRelation: "quotes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quote_items_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      quote_templates: {
        Row: {
          business_id: string
          created_at: string
          id: string
          is_active: boolean
          items: Json
          name: string
          notes: string | null
          validity_days: number | null
        }
        Insert: {
          business_id: string
          created_at?: string
          id?: string
          is_active?: boolean
          items?: Json
          name: string
          notes?: string | null
          validity_days?: number | null
        }
        Update: {
          business_id?: string
          created_at?: string
          id?: string
          is_active?: boolean
          items?: Json
          name?: string
          notes?: string | null
          validity_days?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "quote_templates_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quote_templates_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      quotes: {
        Row: {
          business_id: string
          client_email: string
          client_name: string
          client_phone: string | null
          client_user_id: string | null
          created_at: string
          currency: string
          id: string
          notes: string | null
          pdf_url: string | null
          quote_number: string
          status: string
          subtotal: number
          tax_amount: number
          template_id: string | null
          total: number
          updated_at: string
          user_id: string | null
          valid_until: string | null
          validity_days: number | null
        }
        Insert: {
          business_id: string
          client_email: string
          client_name: string
          client_phone?: string | null
          client_user_id?: string | null
          created_at?: string
          currency?: string
          id?: string
          notes?: string | null
          pdf_url?: string | null
          quote_number: string
          status?: string
          subtotal?: number
          tax_amount?: number
          template_id?: string | null
          total?: number
          updated_at?: string
          user_id?: string | null
          valid_until?: string | null
          validity_days?: number | null
        }
        Update: {
          business_id?: string
          client_email?: string
          client_name?: string
          client_phone?: string | null
          client_user_id?: string | null
          created_at?: string
          currency?: string
          id?: string
          notes?: string | null
          pdf_url?: string | null
          quote_number?: string
          status?: string
          subtotal?: number
          tax_amount?: number
          template_id?: string | null
          total?: number
          updated_at?: string
          user_id?: string | null
          valid_until?: string | null
          validity_days?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "quotes_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotes_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      referrals: {
        Row: {
          business_id: string
          converted_at: string | null
          created_at: string
          discount_percentage: number | null
          id: string
          referral_code: string
          referred_email: string
          referred_user_id: string | null
          referrer_user_id: string
          reward_points: number | null
          status: string
        }
        Insert: {
          business_id: string
          converted_at?: string | null
          created_at?: string
          discount_percentage?: number | null
          id?: string
          referral_code: string
          referred_email: string
          referred_user_id?: string | null
          referrer_user_id: string
          reward_points?: number | null
          status?: string
        }
        Update: {
          business_id?: string
          converted_at?: string | null
          created_at?: string
          discount_percentage?: number | null
          id?: string
          referral_code?: string
          referred_email?: string
          referred_user_id?: string | null
          referrer_user_id?: string
          reward_points?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "referrals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      refunds: {
        Row: {
          amount: number
          business_id: string
          created_at: string
          id: string
          payment_id: string
          processed_at: string | null
          processed_by: string | null
          reason: string | null
          status: string
          stripe_refund_id: string | null
        }
        Insert: {
          amount: number
          business_id: string
          created_at?: string
          id?: string
          payment_id: string
          processed_at?: string | null
          processed_by?: string | null
          reason?: string | null
          status?: string
          stripe_refund_id?: string | null
        }
        Update: {
          amount?: number
          business_id?: string
          created_at?: string
          id?: string
          payment_id?: string
          processed_at?: string | null
          processed_by?: string | null
          reason?: string | null
          status?: string
          stripe_refund_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "refunds_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "refunds_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "refunds_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      reminder_configurations: {
        Row: {
          business_id: string
          channel: string
          created_at: string
          hours_before: number
          id: string
          is_active: boolean
          template_body: string | null
          template_subject: string | null
        }
        Insert: {
          business_id: string
          channel?: string
          created_at?: string
          hours_before: number
          id?: string
          is_active?: boolean
          template_body?: string | null
          template_subject?: string | null
        }
        Update: {
          business_id?: string
          channel?: string
          created_at?: string
          hours_before?: number
          id?: string
          is_active?: boolean
          template_body?: string | null
          template_subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reminder_configurations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reminder_configurations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      reminder_log: {
        Row: {
          appointment_id: string
          channel: string
          error: string | null
          id: string
          reminder_config_id: string | null
          sent_at: string
          status: string
        }
        Insert: {
          appointment_id: string
          channel: string
          error?: string | null
          id?: string
          reminder_config_id?: string | null
          sent_at?: string
          status?: string
        }
        Update: {
          appointment_id?: string
          channel?: string
          error?: string | null
          id?: string
          reminder_config_id?: string | null
          sent_at?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "reminder_log_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reminder_log_reminder_config_id_fkey"
            columns: ["reminder_config_id"]
            isOneToOne: false
            referencedRelation: "reminder_configurations"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          action: string
          created_at: string
          id: string
          resource: string
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          resource: string
          role: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          resource?: string
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: []
      }
      service_categories: {
        Row: {
          business_id: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          is_active: boolean
          name: string
          sort_order: number
        }
        Insert: {
          business_id: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          name: string
          sort_order?: number
        }
        Update: {
          business_id?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          name?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "service_categories_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_categories_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      service_records: {
        Row: {
          appointment_id: string | null
          business_id: string
          client_email: string | null
          client_name: string
          client_user_id: string | null
          created_at: string
          id: string
          insurance_company: string | null
          notes: string | null
          professional_name: string | null
          service_date: string
          service_description: string
        }
        Insert: {
          appointment_id?: string | null
          business_id: string
          client_email?: string | null
          client_name: string
          client_user_id?: string | null
          created_at?: string
          id?: string
          insurance_company?: string | null
          notes?: string | null
          professional_name?: string | null
          service_date?: string
          service_description: string
        }
        Update: {
          appointment_id?: string | null
          business_id?: string
          client_email?: string | null
          client_name?: string
          client_user_id?: string | null
          created_at?: string
          id?: string
          insurance_company?: string | null
          notes?: string | null
          professional_name?: string | null
          service_date?: string
          service_description?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_records_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_records_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_records_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      service_translations: {
        Row: {
          description: string | null
          id: string
          language: string
          name: string
          service_id: string
        }
        Insert: {
          description?: string | null
          id?: string
          language: string
          name: string
          service_id: string
        }
        Update: {
          description?: string | null
          id?: string
          language?: string
          name?: string
          service_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_translations_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          buffer_minutes: number
          business_id: string | null
          category: string | null
          category_id: string | null
          created_at: string
          description: string | null
          duration_minutes: number
          id: string
          image_url: string | null
          is_active: boolean
          location_id: string | null
          name: string
          price: number
          updated_at: string
        }
        Insert: {
          buffer_minutes?: number
          business_id?: string | null
          category?: string | null
          category_id?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          location_id?: string | null
          name: string
          price?: number
          updated_at?: string
        }
        Update: {
          buffer_minutes?: number
          business_id?: string | null
          category?: string | null
          category_id?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          location_id?: string | null
          name?: string
          price?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "service_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_message_attachments: {
        Row: {
          file_name: string
          file_size: number | null
          file_type: string | null
          file_url: string
          id: string
          message_id: string
          uploaded_at: string
        }
        Insert: {
          file_name: string
          file_size?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          message_id: string
          uploaded_at?: string
        }
        Update: {
          file_name?: string
          file_size?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          message_id?: string
          uploaded_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_message_attachments_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "staff_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_messages: {
        Row: {
          body: string
          business_id: string
          client_user_id: string | null
          created_at: string
          id: string
          is_read: boolean
          recipient_id: string | null
          sender_id: string
          subject: string | null
        }
        Insert: {
          body: string
          business_id: string
          client_user_id?: string | null
          created_at?: string
          id?: string
          is_read?: boolean
          recipient_id?: string | null
          sender_id: string
          subject?: string | null
        }
        Update: {
          body?: string
          business_id?: string
          client_user_id?: string | null
          created_at?: string
          id?: string
          is_read?: boolean
          recipient_id?: string | null
          sender_id?: string
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_messages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_messages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_config: {
        Row: {
          business_id: string
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          features: Json | null
          id: string
          max_locations: number | null
          max_monthly_ai_calls: number | null
          max_monthly_bookings: number | null
          max_monthly_emails: number | null
          max_professionals: number | null
          max_services: number | null
          plan_tier: string
          updated_at: string
        }
        Insert: {
          business_id: string
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          features?: Json | null
          id?: string
          max_locations?: number | null
          max_monthly_ai_calls?: number | null
          max_monthly_bookings?: number | null
          max_monthly_emails?: number | null
          max_professionals?: number | null
          max_services?: number | null
          plan_tier?: string
          updated_at?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          features?: Json | null
          id?: string
          max_locations?: number | null
          max_monthly_ai_calls?: number | null
          max_monthly_bookings?: number | null
          max_monthly_emails?: number | null
          max_professionals?: number | null
          max_services?: number | null
          plan_tier?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_config_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscription_config_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      tax_configurations: {
        Row: {
          business_id: string
          created_at: string
          id: string
          is_active: boolean
          is_default: boolean
          name: string
          rate: number
          region: string | null
        }
        Insert: {
          business_id: string
          created_at?: string
          id?: string
          is_active?: boolean
          is_default?: boolean
          name: string
          rate: number
          region?: string | null
        }
        Update: {
          business_id?: string
          created_at?: string
          id?: string
          is_active?: boolean
          is_default?: boolean
          name?: string
          rate?: number
          region?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tax_configurations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tax_configurations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      tts_circuit_state: {
        Row: {
          blocked_until: string | null
          fail_count: number
          id: number
          updated_at: string
        }
        Insert: {
          blocked_until?: string | null
          fail_count?: number
          id?: number
          updated_at?: string
        }
        Update: {
          blocked_until?: string | null
          fail_count?: number
          id?: number
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          business_id: string | null
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          business_id?: string | null
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_roles_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      waitlist_entries: {
        Row: {
          business_id: string | null
          created_at: string
          guest_email: string
          guest_name: string
          guest_phone: string | null
          id: string
          notes: string | null
          preferred_date_end: string | null
          preferred_date_start: string | null
          professional_id: string | null
          service_id: string | null
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          guest_email: string
          guest_name: string
          guest_phone?: string | null
          id?: string
          notes?: string | null
          preferred_date_end?: string | null
          preferred_date_start?: string | null
          professional_id?: string | null
          service_id?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string
          guest_email?: string
          guest_name?: string
          guest_phone?: string | null
          id?: string
          notes?: string | null
          preferred_date_end?: string | null
          preferred_date_start?: string | null
          professional_id?: string | null
          service_id?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "waitlist_entries_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "waitlist_entries_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "waitlist_entries_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "waitlist_entries_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "waitlist_entries_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      blocked_slots_public: {
        Row: {
          business_id: string | null
          date: string | null
          end_time: string | null
          id: string | null
          location_id: string | null
          professional_id: string | null
          start_time: string | null
        }
        Insert: {
          business_id?: string | null
          date?: string | null
          end_time?: string | null
          id?: string | null
          location_id?: string | null
          professional_id?: string | null
          start_time?: string | null
        }
        Update: {
          business_id?: string | null
          date?: string | null
          end_time?: string | null
          id?: string | null
          location_id?: string | null
          professional_id?: string | null
          start_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blocked_slots_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_slots_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_slots_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_slots_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_slots_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals_public"
            referencedColumns: ["id"]
          },
        ]
      }
      businesses_public: {
        Row: {
          address: string | null
          brand_colors: Json | null
          currency: string | null
          email: string | null
          id: string | null
          is_active: boolean | null
          languages: string[] | null
          logo_url: string | null
          name: string | null
          phone: string | null
          slug: string | null
          timezone: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          brand_colors?: Json | null
          currency?: string | null
          email?: string | null
          id?: string | null
          is_active?: boolean | null
          languages?: string[] | null
          logo_url?: string | null
          name?: string | null
          phone?: string | null
          slug?: string | null
          timezone?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          brand_colors?: Json | null
          currency?: string | null
          email?: string | null
          id?: string | null
          is_active?: boolean | null
          languages?: string[] | null
          logo_url?: string | null
          name?: string | null
          phone?: string | null
          slug?: string | null
          timezone?: string | null
          website?: string | null
        }
        Relationships: []
      }
      patient_reviews_public: {
        Row: {
          business_id: string | null
          comment: string | null
          created_at: string | null
          display_name: string | null
          id: string | null
          is_approved: boolean | null
          rating: number | null
        }
        Insert: {
          business_id?: string | null
          comment?: string | null
          created_at?: string | null
          display_name?: string | null
          id?: string | null
          is_approved?: boolean | null
          rating?: number | null
        }
        Update: {
          business_id?: string | null
          comment?: string | null
          created_at?: string | null
          display_name?: string | null
          id?: string | null
          is_approved?: boolean | null
          rating?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "patient_reviews_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "patient_reviews_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
      professionals_public: {
        Row: {
          bio: string | null
          business_id: string | null
          id: string | null
          is_active: boolean | null
          name: string | null
          photo_url: string | null
          role_title: string | null
          specialties: string[] | null
        }
        Insert: {
          bio?: string | null
          business_id?: string | null
          id?: string | null
          is_active?: boolean | null
          name?: string | null
          photo_url?: string | null
          role_title?: string | null
          specialties?: string[] | null
        }
        Update: {
          bio?: string | null
          business_id?: string | null
          id?: string | null
          is_active?: boolean | null
          name?: string | null
          photo_url?: string | null
          role_title?: string | null
          specialties?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "professionals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "professionals_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses_public"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      cleanup_old_staff_messages: { Args: never; Returns: number }
      generate_invoice_number: {
        Args: { _business_id: string }
        Returns: string
      }
      generate_quote_number: { Args: { _business_id: string }; Returns: string }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_business_admin: {
        Args: { _business_id: string; _user_id: string }
        Returns: boolean
      }
      is_business_staff: {
        Args: { _business_id: string; _user_id: string }
        Returns: boolean
      }
      is_super_admin: { Args: { _user_id: string }; Returns: boolean }
      user_business_ids: { Args: never; Returns: string[] }
    }
    Enums: {
      app_role:
        | "admin"
        | "client"
        | "super_admin"
        | "business_admin"
        | "manager"
        | "receptionist"
        | "professional"
      appointment_status:
        | "pending"
        | "confirmed"
        | "cancelled_by_client"
        | "cancelled_by_admin"
        | "completed"
        | "rescheduled"
        | "attended"
        | "no_show"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "admin",
        "client",
        "super_admin",
        "business_admin",
        "manager",
        "receptionist",
        "professional",
      ],
      appointment_status: [
        "pending",
        "confirmed",
        "cancelled_by_client",
        "cancelled_by_admin",
        "completed",
        "rescheduled",
        "attended",
        "no_show",
      ],
    },
  },
} as const
